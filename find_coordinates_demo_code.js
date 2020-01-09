/// <summary>Calculates the destination coordinate by given angle and distance.</summary>
/// <param name="origin">Origin.</param>
/// <param name="bearing">Azimuth.</param>
/// <param name="distance">Distance (km).</param>
/// <returns>Coordinate.</returns>
public static Coordinate GetTarget(
this Coordinate origin, double bearing, double distance, double altitude = 0)
{
    var d = distance / 6371;
    var rlat = origin.Y.ToRadian();
    var rlon = origin.X.ToRadian();
    var rbearing = bearing.ToRadian();
    var lat2 = rlat + (d * Math.Cos(rbearing));
    var dlat = lat2 - rlat;
    var dphi = Math.Log((Math.Tan((lat2 / 2) + (Math.PI / 4))) / (Math.Tan((rlat / 2) + (Math.PI / 4))));
    var q =
        Math.Abs(dlat) > 0.0000000001
        ? dlat / dphi
        : Math.Cos(rlat);
    var dlon = (d * Math.Sin(rbearing)) / q;

    if (Math.Abs(lat2) > Math.PI / 2)
    {
        lat2 = lat2 > 0 ? Math.PI : Math.PI - lat2;
    }

    var lon2 = (rlon + dlon + Math.PI) % (2 * Math.PI) - Math.PI;

    return new Coordinate
    {
        X = lon2.ToDegree(),
        Y = lat2.ToDegree(),
        Z = origin.Z
    };
}
