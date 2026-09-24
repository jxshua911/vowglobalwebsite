import { Link, createFileRoute } from "@tanstack/react-router";
import { site } from "@/content/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VOW" },
      { name: "description", content: "VOW turns goals into structured plans, sessions and visible progress." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const steps = [
  ["01", "Make it concrete", "Turn what you want into a defined outcome, milestones and a practical sequence."],
  ["02", "Put it into motion", "Build sessions around real time, real constraints and the work that actually needs doing."],
  ["03", "Keep your VOW", "Review what happened, learn from the evidence and adjust without losing the goal."],
];

function Home() {
  return (
    <>
      <section className="relative min-h-[82vh] overflow-hidden bg-vow-bg text-vow-ink">
        <div className="absolute inset-0 vow-hero-art" aria-hidden />
                <div className="vow-paint-splash" aria-hidden>
<svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" role="presentation">
<path d="M1264.7 177.5Q1265.9 180.8 1264.7 183.7Q1263.6 186.6 1263.8 190.5Q1264.0 194.4 1257.3 198.6Q1250.5 202.9 1245.1 198.8Q1239.6 194.6 1231.0 188.5Q1222.4 182.4 1229.4 177.8Q1236.4 173.3 1236.9 172.1Q1237.4 171.0 1240.1 163.2Q1242.8 155.5 1252.9 157.1Q1263.0 158.8 1263.2 166.4Q1263.4 174.1 1264.7 177.5Z"/>
<circle cx="1270.1" cy="250.9" r="1.8"/>
<circle cx="1134.2" cy="111.0" r="2.6"/>
<circle cx="1228.1" cy="247.7" r="1.4"/>
<circle cx="1072.6" cy="90.4" r="2.7"/>
<path d="M1288.0 150.4Q1292.6 154.1 1290.3 160.5Q1288.1 166.9 1277.2 171.9Q1266.3 176.9 1260.9 169.3Q1255.6 161.8 1254.8 155.1Q1254.0 148.4 1262.4 141.6Q1270.9 134.9 1277.1 140.8Q1283.4 146.6 1288.0 150.4Z"/>
<path d="M1198.0 79.4Q1197.9 87.8 1192.8 92.2Q1187.8 96.6 1182.6 97.2Q1177.3 97.9 1170.1 94.0Q1162.8 90.2 1158.5 84.1Q1154.2 78.1 1163.8 71.3Q1173.4 64.5 1185.8 67.8Q1198.1 71.1 1198.0 79.4Z"/>
<path d="M1107.3 264.5Q1106.8 268.9 1106.2 273.2Q1105.6 277.5 1100.9 277.2Q1096.1 277.0 1091.1 276.5Q1086.1 276.0 1086.4 270.3Q1086.6 264.6 1091.2 263.0Q1095.8 261.5 1101.7 260.8Q1107.7 260.1 1107.3 264.5Z"/>
<circle cx="1083.7" cy="313.4" r="1.8"/>
<circle cx="1288.7" cy="209.4" r="1.2"/>
<circle cx="1263.4" cy="230.4" r="1.2"/>
<circle cx="1238.0" cy="199.0" r="1.2"/>
<circle cx="1266.7" cy="192.4" r="2.4"/>
<circle cx="1384.8" cy="201.8" r="1.2"/>
<circle cx="1248.0" cy="317.6" r="1.8"/>
<path d="M1140.8 315.6Q1145.3 320.9 1142.3 325.4Q1139.4 329.9 1130.6 330.4Q1121.8 330.9 1115.3 327.8Q1108.8 324.8 1111.9 320.4Q1115.1 315.9 1120.6 308.2Q1126.2 300.5 1131.2 305.4Q1136.3 310.3 1140.8 315.6Z"/>
<circle cx="1211.3" cy="172.0" r="1.3"/>
<path d="M1312.1 60.3Q1318.7 66.6 1312.2 70.6Q1305.6 74.6 1300.4 73.7Q1295.2 72.8 1289.5 71.9Q1283.9 71.0 1283.5 62.2Q1283.1 53.5 1289.9 49.2Q1296.6 44.9 1301.0 49.4Q1305.4 53.9 1312.1 60.3Z"/>
<circle cx="1307.5" cy="375.0" r="6.5"/>
<circle cx="1050.5" cy="205.9" r="3.8"/>
<path d="M1312.4 13.1Q1313.4 17.4 1312.0 19.9Q1310.6 22.4 1304.7 24.0Q1298.7 25.6 1295.5 23.5Q1292.3 21.4 1294.1 18.0Q1295.9 14.7 1299.0 11.4Q1302.1 8.1 1306.8 8.5Q1311.4 8.8 1312.4 13.1Z"/>
<circle cx="1185.4" cy="268.5" r="3.6"/>
<circle cx="1479.8" cy="427.7" r="2.3"/>
<path d="M1215.0 167.0Q1219.1 171.5 1214.8 175.0Q1210.5 178.5 1205.5 180.8Q1200.4 183.2 1196.5 180.0Q1192.6 176.8 1191.1 172.1Q1189.6 167.4 1195.5 163.3Q1201.3 159.1 1206.1 160.8Q1211.0 162.5 1215.0 167.0Z"/>
<circle cx="1340.4" cy="190.7" r="1.2"/>
<circle cx="1264.6" cy="134.2" r="1.2"/>
<circle cx="1206.9" cy="187.3" r="2.0"/>
<circle cx="1080.0" cy="160.3" r="3.2"/>
<circle cx="1280.1" cy="42.4" r="1.2"/>
<circle cx="1230.6" cy="293.5" r="6.6"/>
<path d="M1049.1 167.9Q1051.7 169.8 1050.1 173.0Q1048.5 176.2 1044.5 177.1Q1040.6 178.0 1036.7 175.8Q1032.8 173.7 1033.5 170.3Q1034.2 166.9 1038.1 166.0Q1042.0 165.0 1044.2 165.5Q1046.4 166.0 1049.1 167.9Z"/>
<circle cx="1336.6" cy="222.9" r="5.1"/>
<circle cx="1266.0" cy="106.2" r="6.1"/>
<circle cx="1216.9" cy="127.7" r="1.2"/>
<path d="M1337.4 103.3Q1340.0 110.4 1335.9 114.7Q1331.9 118.9 1327.6 119.6Q1323.3 120.3 1317.9 118.4Q1312.4 116.6 1313.3 111.6Q1314.2 106.7 1318.0 102.7Q1321.8 98.8 1328.3 97.5Q1334.7 96.2 1337.4 103.3Z"/>
<circle cx="1286.5" cy="173.4" r="1.2"/>
<circle cx="1228.3" cy="401.0" r="1.2"/>
<circle cx="1299.0" cy="231.9" r="2.7"/>
<circle cx="1300.1" cy="148.8" r="1.2"/>
<circle cx="1341.1" cy="129.3" r="3.9"/>
<path d="M1250.0 180.0Q1221.7 154.7 1228.9 114.4" fill="none" strokeWidth="2.6" strokeLinecap="round"/>
<path d="M1250.0 180.0Q1324.5 225.9 1388.2 247.6" fill="none" strokeWidth="1.7" strokeLinecap="round"/>
<circle cx="1561.0" cy="556.1" r="2.0"/>
<path d="M1394.3 483.5Q1394.7 486.5 1393.2 489.3Q1391.8 492.1 1388.4 493.6Q1384.9 495.0 1379.1 493.9Q1373.4 492.7 1375.0 488.3Q1376.6 483.8 1378.9 482.2Q1381.2 480.6 1387.6 480.6Q1393.9 480.5 1394.3 483.5Z"/>
<path d="M1424.9 527.0Q1427.5 529.5 1426.1 532.6Q1424.7 535.6 1420.3 536.0Q1415.9 536.4 1413.2 534.4Q1410.4 532.5 1411.9 530.2Q1413.3 528.0 1414.3 525.4Q1415.3 522.8 1418.8 523.6Q1422.3 524.5 1424.9 527.0Z"/>
<circle cx="1506.2" cy="492.3" r="5.8"/>
<circle cx="1475.2" cy="543.4" r="3.3"/>
<circle cx="1534.8" cy="603.5" r="2.7"/>
<circle cx="1457.5" cy="789.2" r="2.3"/>
<path d="M1496.4 595.0Q1497.5 600.4 1495.4 605.9Q1493.3 611.4 1487.2 611.9Q1481.1 612.5 1476.8 609.4Q1472.4 606.3 1472.1 602.6Q1471.7 598.8 1474.5 593.1Q1477.3 587.4 1486.2 588.5Q1495.2 589.6 1496.4 595.0Z"/>
<path d="M1558.8 455.4Q1564.3 458.3 1562.2 467.2Q1560.0 476.2 1548.0 478.9Q1535.9 481.6 1530.6 476.1Q1525.3 470.7 1523.9 459.7Q1522.4 448.8 1529.9 444.1Q1537.4 439.3 1545.4 445.9Q1553.4 452.5 1558.8 455.4Z"/>
<circle cx="1530.0" cy="575.3" r="2.2"/>
<circle cx="1545.6" cy="570.9" r="4.7"/>
<circle cx="1392.1" cy="430.7" r="5.0"/>
<circle cx="1288.8" cy="532.9" r="5.1"/>
<circle cx="1456.4" cy="519.6" r="4.1"/>
<circle cx="1391.8" cy="382.3" r="1.2"/>
<circle cx="1554.3" cy="557.5" r="1.5"/>
<path d="M1485.8 451.7Q1488.9 456.8 1486.4 464.6Q1483.8 472.4 1475.9 469.5Q1467.9 466.6 1460.8 466.1Q1453.7 465.5 1456.9 459.0Q1460.1 452.5 1462.8 445.9Q1465.4 439.2 1474.0 442.9Q1482.7 446.6 1485.8 451.7Z"/>
<circle cx="1312.9" cy="557.7" r="2.4"/>
<path d="M1543.6 563.0Q1544.7 569.5 1544.4 577.1Q1544.1 584.7 1536.9 583.7Q1529.6 582.7 1522.3 579.0Q1515.1 575.4 1512.7 567.6Q1510.3 559.8 1520.1 554.7Q1529.8 549.5 1536.1 553.0Q1542.4 556.5 1543.6 563.0Z"/>
<circle cx="1420.6" cy="525.2" r="1.2"/>
<circle cx="1471.8" cy="544.1" r="1.2"/>
<circle cx="1427.6" cy="598.2" r="1.2"/>
<circle cx="1480.9" cy="331.8" r="6.8"/>
<path d="M1602.2 622.8Q1602.1 626.1 1600.1 629.9Q1598.0 633.8 1595.0 633.0Q1591.9 632.3 1588.1 632.0Q1584.3 631.7 1585.7 627.4Q1587.0 623.0 1589.4 621.8Q1591.8 620.6 1597.0 620.1Q1602.2 619.5 1602.2 622.8Z"/>
<path d="M1429.6 453.4Q1432.1 457.7 1431.2 460.3Q1430.3 463.0 1423.3 464.0Q1416.3 465.1 1412.5 463.6Q1408.6 462.1 1409.7 457.2Q1410.9 452.2 1414.6 448.3Q1418.4 444.3 1422.8 446.7Q1427.2 449.2 1429.6 453.4Z"/>
<circle cx="1442.0" cy="549.8" r="1.2"/>
<circle cx="1537.7" cy="481.3" r="3.4"/>
<circle cx="1534.0" cy="803.2" r="1.6"/>
<circle cx="1513.3" cy="607.9" r="1.2"/>
<circle cx="1484.6" cy="587.2" r="1.5"/>
<path d="M1480.0 520.0Q1436.1 491.3 1372.2 469.6" fill="none" strokeWidth="2.5" strokeLinecap="round"/>
<path d="M1480.0 520.0Q1434.9 496.6 1402.8 508.2" fill="none" strokeWidth="2.2" strokeLinecap="round"/>
<path d="M924.8 215.2Q924.5 217.7 923.5 221.1Q922.6 224.4 918.1 224.8Q913.7 225.1 911.7 224.5Q909.7 223.8 909.5 219.8Q909.3 215.8 911.9 212.3Q914.5 208.8 919.8 210.7Q925.1 212.7 924.8 215.2Z"/>
<circle cx="837.4" cy="134.3" r="1.2"/>
<circle cx="718.2" cy="105.6" r="5.8"/>
<path d="M874.8 128.7Q876.4 130.9 873.6 133.1Q870.8 135.3 867.6 136.6Q864.3 138.0 862.3 136.9Q860.3 135.9 860.5 132.7Q860.7 129.6 862.3 128.1Q863.9 126.6 868.5 126.5Q873.1 126.5 874.8 128.7Z"/>
<path d="M807.7 117.0Q809.5 124.9 807.8 130.6Q806.2 136.3 799.0 139.4Q791.9 142.5 787.8 135.9Q783.7 129.3 780.2 123.7Q776.7 118.1 784.5 112.7Q792.2 107.3 799.1 108.2Q805.9 109.1 807.7 117.0Z"/>
<circle cx="855.3" cy="44.9" r="1.3"/>
<path d="M836.5 140.6Q837.6 144.2 836.8 150.9Q836.0 157.6 829.6 156.7Q823.1 155.8 817.6 151.2Q812.1 146.6 810.9 143.4Q809.7 140.2 816.4 133.0Q823.1 125.8 829.2 131.3Q835.3 136.9 836.5 140.6Z"/>
<circle cx="902.9" cy="84.7" r="6.4"/>
<circle cx="880.7" cy="132.3" r="2.3"/>
<circle cx="775.6" cy="198.7" r="1.2"/>
<path d="M867.7 115.7Q875.2 118.2 871.4 126.3Q867.6 134.4 859.9 132.4Q852.2 130.5 844.4 129.3Q836.6 128.1 836.2 121.6Q835.9 115.1 842.7 109.1Q849.6 103.2 854.8 108.2Q860.1 113.1 867.7 115.7Z"/>
<circle cx="904.9" cy="73.4" r="1.4"/>
<circle cx="818.6" cy="38.6" r="1.5"/>
<circle cx="883.2" cy="102.8" r="4.7"/>
<circle cx="817.3" cy="155.1" r="1.7"/>
<circle cx="911.6" cy="122.2" r="6.6"/>
<circle cx="953.3" cy="42.8" r="1.2"/>
<circle cx="837.2" cy="289.2" r="2.5"/>
<circle cx="915.9" cy="93.3" r="1.3"/>
<circle cx="780.5" cy="138.6" r="3.5"/>
<circle cx="893.7" cy="84.3" r="6.4"/>
<circle cx="831.2" cy="42.3" r="1.9"/>
<path d="M782.3 167.5Q782.9 170.0 781.8 171.8Q780.8 173.7 778.0 175.6Q775.2 177.4 771.4 175.3Q767.6 173.1 769.5 171.3Q771.4 169.6 773.6 167.5Q775.9 165.4 778.8 165.2Q781.7 165.1 782.3 167.5Z"/>
<circle cx="818.8" cy="29.0" r="1.2"/>
<circle cx="885.8" cy="17.5" r="1.5"/>
<path d="M820.0 120.0Q798.4 94.1 757.8 92.2" fill="none" strokeWidth="2.1" strokeLinecap="round"/>
<path d="M820.0 120.0Q836.1 149.5 821.5 172.7" fill="none" strokeWidth="2.3" strokeLinecap="round"/>
<path d="M143.1 81.3Q141.7 90.1 147.6 99.0Q153.4 107.9 144.5 114.8Q135.7 121.8 125.3 112.2Q114.9 102.6 111.9 105.0Q109.0 107.4 95.2 102.7Q81.5 98.1 88.3 89.6Q95.1 81.1 96.2 73.4Q97.2 65.8 107.0 65.8Q116.7 65.8 121.9 71.0Q127.1 76.2 135.8 74.4Q144.5 72.6 143.1 81.3Z"/>
<circle cx="144.2" cy="170.4" r="5.4"/>
<circle cx="129.7" cy="112.6" r="2.0"/>
<circle cx="133.1" cy="133.5" r="1.2"/>
<circle cx="206.1" cy="153.7" r="2.3"/>
<circle cx="81.8" cy="77.5" r="1.2"/>
<circle cx="105.2" cy="48.4" r="2.7"/>
<circle cx="102.7" cy="171.3" r="1.8"/>
<path d="M46.4 195.3Q49.2 202.0 45.4 208.1Q41.7 214.3 33.1 220.0Q24.4 225.7 16.1 216.8Q7.8 208.0 7.0 202.7Q6.3 197.5 17.5 192.3Q28.8 187.2 36.2 187.9Q43.7 188.6 46.4 195.3Z"/>
<circle cx="100.9" cy="180.1" r="3.4"/>
<path d="M200.5 49.9Q201.9 52.6 201.2 55.9Q200.5 59.1 197.9 59.4Q195.3 59.7 191.5 56.8Q187.7 54.0 187.4 51.8Q187.1 49.6 190.2 46.4Q193.3 43.1 196.2 45.2Q199.1 47.2 200.5 49.9Z"/>
<circle cx="47.7" cy="81.8" r="2.4"/>
<path d="M145.3 100.6Q148.3 103.3 147.7 107.9Q147.0 112.5 139.8 114.4Q132.6 116.3 129.2 113.4Q125.8 110.6 124.7 105.7Q123.6 100.9 128.6 99.4Q133.7 98.0 138.0 98.0Q142.2 98.0 145.3 100.6Z"/>
<circle cx="67.0" cy="104.2" r="1.2"/>
<circle cx="184.8" cy="157.7" r="2.6"/>
<circle cx="204.2" cy="144.7" r="1.2"/>
<circle cx="86.8" cy="51.7" r="1.2"/>
<circle cx="116.4" cy="55.3" r="1.2"/>
<circle cx="15.1" cy="87.4" r="2.2"/>
<path d="M252.2 47.4Q257.2 57.7 248.2 67.5Q239.2 77.2 229.7 75.0Q220.2 72.8 215.2 66.2Q210.1 59.7 210.5 52.6Q211.0 45.6 214.8 40.2Q218.6 34.8 232.9 35.9Q247.2 37.1 252.2 47.4Z"/>
<circle cx="109.7" cy="216.8" r="3.1"/>
<circle cx="92.9" cy="148.5" r="1.2"/>
<circle cx="148.1" cy="78.1" r="6.0"/>
<path d="M120.0 90.0Q149.7 60.5 156.5 61.8" fill="none" strokeWidth="2.8" strokeLinecap="round"/>
<path d="M120.0 90.0Q116.1 70.5 82.3 46.5" fill="none" strokeWidth="3.0" strokeLinecap="round"/>
<path d="M1519.2 830.9Q1522.3 833.7 1520.1 837.3Q1517.9 840.8 1514.1 841.2Q1510.4 841.6 1507.4 839.2Q1504.4 836.7 1504.2 833.2Q1504.1 829.8 1506.8 830.2Q1509.5 830.6 1512.8 829.3Q1516.0 828.1 1519.2 830.9Z"/>
<circle cx="1484.8" cy="816.4" r="1.3"/>
<circle cx="1507.4" cy="787.6" r="1.2"/>
<circle cx="1567.4" cy="820.6" r="2.3"/>
<circle cx="1536.8" cy="861.9" r="4.5"/>
<circle cx="1492.9" cy="796.7" r="3.3"/>
<path d="M1604.6 890.2Q1606.5 894.5 1606.0 900.8Q1605.5 907.1 1600.0 904.9Q1594.6 902.8 1589.5 901.0Q1584.4 899.3 1585.1 894.4Q1585.8 889.4 1590.5 887.2Q1595.1 884.9 1598.9 885.4Q1602.6 885.9 1604.6 890.2Z"/>
<circle cx="1587.2" cy="824.4" r="4.0"/>
<circle cx="1572.0" cy="803.7" r="4.8"/>
<circle cx="1478.8" cy="817.8" r="5.2"/>
<circle cx="1546.9" cy="779.9" r="1.8"/>
<path d="M1602.4 836.5Q1605.1 840.8 1602.2 844.8Q1599.3 848.8 1594.4 848.1Q1589.6 847.5 1587.5 845.5Q1585.4 843.5 1583.4 839.5Q1581.3 835.5 1586.6 832.9Q1591.9 830.3 1595.7 831.3Q1599.6 832.3 1602.4 836.5Z"/>
<path d="M1520.2 808.4Q1523.8 814.1 1518.2 820.0Q1512.5 825.9 1503.3 828.4Q1494.0 830.9 1490.4 825.2Q1486.7 819.5 1486.5 812.7Q1486.3 805.9 1492.4 801.3Q1498.4 796.8 1507.5 799.8Q1516.5 802.7 1520.2 808.4Z"/>
<circle cx="1432.5" cy="860.6" r="5.9"/>
<circle cx="1498.6" cy="805.2" r="5.1"/>
<path d="M1589.7 840.8Q1590.4 846.7 1588.8 850.7Q1587.1 854.7 1584.3 855.1Q1581.5 855.5 1575.4 854.0Q1569.3 852.4 1569.4 848.6Q1569.5 844.8 1575.0 839.2Q1580.4 833.7 1584.7 834.3Q1588.9 834.9 1589.7 840.8Z"/>
<circle cx="1578.7" cy="802.2" r="1.2"/>
<path d="M1583.2 826.3Q1584.7 831.0 1582.0 832.9Q1579.2 834.8 1576.4 836.5Q1573.6 838.2 1570.0 835.6Q1566.3 833.0 1566.4 830.0Q1566.4 827.1 1569.2 824.3Q1572.0 821.5 1576.8 821.6Q1581.7 821.6 1583.2 826.3Z"/>
<path d="M1530.0 820.0Q1552.3 835.8 1579.7 829.8" fill="none" strokeWidth="2.4" strokeLinecap="round"/>
<path d="M1530.0 820.0Q1510.7 807.2 1514.0 765.4" fill="none" strokeWidth="1.7" strokeLinecap="round"/>
<path d="M592.4 347.1Q592.0 350.2 592.2 352.3Q592.3 354.4 588.9 354.9Q585.5 355.5 582.4 354.3Q579.2 353.1 579.3 350.1Q579.3 347.1 581.7 345.6Q584.1 344.1 588.4 344.1Q592.7 344.0 592.4 347.1Z"/>
<circle cx="545.9" cy="285.4" r="2.4"/>
<circle cx="470.9" cy="363.7" r="1.2"/>
<circle cx="628.6" cy="242.1" r="1.2"/>
<circle cx="568.1" cy="328.5" r="3.7"/>
<path d="M468.7 391.0Q470.3 392.6 468.7 396.9Q467.1 401.3 463.6 400.4Q460.1 399.4 456.0 397.8Q451.9 396.2 452.5 393.5Q453.1 390.8 456.6 389.2Q460.1 387.6 463.6 388.5Q467.1 389.4 468.7 391.0Z"/>
<circle cx="544.0" cy="347.6" r="1.2"/>
<circle cx="626.6" cy="399.3" r="1.3"/>
<circle cx="536.1" cy="345.8" r="2.0"/>
<path d="M583.3 316.4Q584.1 324.0 583.4 329.5Q582.7 335.0 572.1 337.7Q561.5 340.3 556.3 335.7Q551.1 331.2 551.4 324.8Q551.6 318.4 557.3 310.4Q563.0 302.3 572.7 305.5Q582.4 308.7 583.3 316.4Z"/>
<circle cx="600.1" cy="349.6" r="6.7"/>
<circle cx="604.7" cy="270.8" r="2.8"/>
<circle cx="541.8" cy="290.9" r="1.4"/>
<path d="M556.8 221.7Q558.1 225.9 555.6 229.1Q553.0 232.4 549.0 232.5Q545.1 232.7 540.6 231.2Q536.1 229.8 537.6 225.5Q539.1 221.2 541.6 218.6Q544.1 215.9 549.8 216.7Q555.5 217.5 556.8 221.7Z"/>
<circle cx="543.4" cy="275.7" r="3.6"/>
<circle cx="631.8" cy="288.4" r="1.2"/>
<path d="M500.6 276.9Q503.0 281.2 502.6 286.5Q502.1 291.7 495.0 293.2Q487.9 294.8 482.5 291.1Q477.0 287.4 479.1 281.3Q481.3 275.1 483.6 271.4Q486.0 267.7 492.1 270.1Q498.2 272.5 500.6 276.9Z"/>
<circle cx="659.5" cy="308.3" r="2.5"/>
<path d="M560.0 300.0Q528.4 304.6 508.7 328.0" fill="none" strokeWidth="2.1" strokeLinecap="round"/>
<path d="M560.0 300.0Q559.2 254.2 556.3 230.8" fill="none" strokeWidth="3.5" strokeLinecap="round"/>
<path d="M1197.9 413.9Q1200.4 417.1 1196.7 422.6Q1193.0 428.2 1192.5 432.2Q1192.0 436.2 1183.9 437.9Q1175.8 439.7 1173.6 434.3Q1171.3 428.9 1165.9 428.1Q1160.5 427.3 1164.3 421.5Q1168.1 415.6 1168.5 413.8Q1168.8 412.0 1171.1 408.7Q1173.4 405.4 1178.9 407.3Q1184.3 409.2 1189.8 409.9Q1195.3 410.6 1197.9 413.9Z"/>
<circle cx="1084.3" cy="532.1" r="1.2"/>
<path d="M1227.0 345.0Q1227.0 349.3 1224.9 351.1Q1222.8 352.9 1218.1 355.0Q1213.3 357.1 1212.1 354.7Q1210.9 352.2 1210.2 348.3Q1209.5 344.3 1213.4 341.3Q1217.3 338.4 1222.2 339.6Q1227.1 340.7 1227.0 345.0Z"/>
<path d="M1128.0 311.6Q1130.2 314.8 1127.9 318.4Q1125.5 321.9 1122.6 321.4Q1119.6 320.8 1117.2 319.9Q1114.7 318.9 1115.1 316.2Q1115.6 313.4 1117.5 310.7Q1119.5 308.0 1122.6 308.2Q1125.8 308.5 1128.0 311.6Z"/>
<circle cx="1089.1" cy="382.3" r="5.1"/>
<path d="M1232.7 351.3Q1236.1 355.9 1234.1 362.1Q1232.1 368.4 1223.0 369.9Q1213.9 371.5 1209.6 368.2Q1205.3 365.0 1203.7 359.7Q1202.1 354.4 1208.0 349.0Q1213.9 343.6 1221.5 345.2Q1229.2 346.7 1232.7 351.3Z"/>
<circle cx="1197.8" cy="490.8" r="2.8"/>
<circle cx="1050.0" cy="488.9" r="1.4"/>
<circle cx="1210.4" cy="362.7" r="2.6"/>
<path d="M1167.5 411.6Q1171.2 420.4 1165.6 425.3Q1160.0 430.3 1151.1 432.6Q1142.1 434.9 1134.0 430.7Q1125.9 426.6 1128.9 421.3Q1131.8 416.1 1135.9 407.5Q1140.0 399.0 1151.9 400.9Q1163.7 402.8 1167.5 411.6Z"/>
<circle cx="1100.0" cy="352.3" r="4.4"/>
<circle cx="1143.6" cy="382.8" r="5.8"/>
<circle cx="1206.0" cy="528.5" r="4.9"/>
<circle cx="1158.1" cy="425.9" r="1.2"/>
<path d="M1238.9 429.8Q1239.9 433.3 1238.1 436.1Q1236.3 438.8 1233.6 438.3Q1230.9 437.7 1228.2 436.6Q1225.5 435.5 1226.4 432.5Q1227.3 429.4 1228.3 428.3Q1229.4 427.2 1233.7 426.7Q1237.9 426.2 1238.9 429.8Z"/>
<path d="M1282.7 426.6Q1285.3 430.3 1284.3 432.9Q1283.2 435.5 1277.6 435.1Q1272.0 434.7 1267.7 433.3Q1263.5 431.9 1260.5 428.4Q1257.6 425.0 1262.2 421.4Q1266.9 417.9 1273.5 420.4Q1280.1 422.8 1282.7 426.6Z"/>
<circle cx="1192.4" cy="338.2" r="6.0"/>
<circle cx="1194.7" cy="401.2" r="5.3"/>
<circle cx="1167.3" cy="371.7" r="3.1"/>
<circle cx="1202.5" cy="409.8" r="6.8"/>
<circle cx="1385.3" cy="434.7" r="1.2"/>
<circle cx="1161.3" cy="394.0" r="2.0"/>
<circle cx="1174.0" cy="373.6" r="1.2"/>
<circle cx="1209.0" cy="385.4" r="2.4"/>
<circle cx="1160.2" cy="409.9" r="3.1"/>
<path d="M1180.0 420.0Q1182.0 394.5 1160.2 379.9" fill="none" strokeWidth="3.1" strokeLinecap="round"/>
<path d="M1180.0 420.0Q1154.5 409.2 1138.1 375.6" fill="none" strokeWidth="3.9" strokeLinecap="round"/>
<circle cx="1255.4" cy="510.1" r="1.4"/>
<circle cx="1125.2" cy="744.7" r="1.5"/>
<circle cx="1330.1" cy="541.0" r="1.5"/>
<circle cx="1292.0" cy="255.0" r="0.8"/>
<circle cx="420.9" cy="380.3" r="2.1"/>
<circle cx="1305.6" cy="798.7" r="0.9"/>
<circle cx="1333.2" cy="730.6" r="2.7"/>
<circle cx="915.1" cy="246.5" r="2.7"/>
<circle cx="1291.3" cy="616.2" r="2.8"/>
<circle cx="555.0" cy="76.6" r="2.0"/>
<circle cx="1275.8" cy="180.4" r="2.5"/>
<circle cx="1490.8" cy="210.6" r="2.1"/>
<circle cx="1084.3" cy="418.8" r="1.3"/>
<circle cx="1266.7" cy="413.7" r="1.0"/>
<circle cx="1290.5" cy="694.9" r="1.3"/>
<circle cx="1416.2" cy="469.7" r="1.8"/>
<circle cx="942.9" cy="170.2" r="1.2"/>
<circle cx="238.4" cy="40.1" r="3.0"/>
<circle cx="598.5" cy="95.5" r="2.2"/>
<circle cx="1259.8" cy="140.5" r="2.1"/>
<circle cx="32.9" cy="30.2" r="3.0"/>
<circle cx="1385.7" cy="437.7" r="2.0"/>
<circle cx="1227.6" cy="736.9" r="2.9"/>
<circle cx="406.4" cy="34.1" r="1.2"/>
<circle cx="289.2" cy="75.3" r="0.9"/>
<circle cx="1455.9" cy="57.8" r="2.1"/>
<circle cx="635.8" cy="107.9" r="2.9"/>
<circle cx="1071.6" cy="353.8" r="1.8"/>
<circle cx="1586.7" cy="199.5" r="0.9"/>
<circle cx="409.4" cy="316.8" r="2.8"/>
<circle cx="1447.3" cy="753.5" r="0.9"/>
<circle cx="1258.2" cy="638.6" r="2.2"/>
<circle cx="1576.7" cy="50.2" r="1.1"/>
<circle cx="1207.9" cy="845.4" r="2.3"/>
<circle cx="1212.6" cy="94.9" r="1.5"/>
<circle cx="411.2" cy="111.7" r="1.9"/>
<circle cx="269.7" cy="214.6" r="1.1"/>
<circle cx="1084.2" cy="11.4" r="2.4"/>
<circle cx="312.2" cy="32.4" r="2.8"/>
<circle cx="1386.8" cy="799.8" r="1.1"/>
<circle cx="715.6" cy="87.3" r="2.8"/>
<circle cx="1347.6" cy="565.5" r="1.8"/>
<circle cx="228.4" cy="199.5" r="0.9"/>
<circle cx="1142.0" cy="498.0" r="1.1"/>
<circle cx="1393.2" cy="239.8" r="1.7"/>
<circle cx="249.1" cy="244.0" r="2.6"/>
<circle cx="535.2" cy="151.0" r="1.9"/>
<circle cx="1069.2" cy="190.0" r="1.9"/>
<circle cx="458.0" cy="232.0" r="1.2"/>
<circle cx="1596.9" cy="832.6" r="1.0"/>
<circle cx="545.4" cy="126.1" r="0.8"/>
<circle cx="1331.6" cy="473.9" r="1.2"/>
<circle cx="220.9" cy="162.1" r="2.5"/>
<circle cx="1138.6" cy="177.0" r="1.0"/>
<circle cx="792.8" cy="246.5" r="1.3"/>
<circle cx="1298.5" cy="524.6" r="1.2"/>
</svg>
</div>
                <div className="container-site relative flex min-h-[82vh] items-end py-14 sm:py-20">
          <div className="grid w-full gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="vow-label">Goal planning · Accountability · Progress</p>
              <h1 className="vow-hero-title mt-6 max-w-5xl text-[clamp(3.6rem,9vw,8.5rem)]">
                <span className="block">Make your VOW.</span>
                <span className="block">Keep your VOW.</span>
              </h1>
            </div>
            <div className="lg:col-span-4 lg:pb-2">
              <p className="max-w-[38ch] text-base leading-[1.8] text-vow-muted sm:text-lg">
                {site.tagline} Built to move you from intention to scheduled work, then back to the evidence of what actually happened.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <Link to="/how-it-works" className="vow-btn-primary">See how it works</Link>
                <Link to="/support" className="vow-arrow-light">Start a conversation <span aria-hidden>→</span></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-site py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <p className="vow-label">The VOW system</p>
            <h2 className="mt-5 max-w-xl text-[clamp(2.6rem,5vw,4.7rem)] leading-[.92]">A goal is only the beginning.</h2>
          </div>
          <div className="lg:col-span-7 lg:pl-10">
            <p className="max-w-[58ch] text-xl leading-[1.65]">VOW connects planning, commitment and review into one continuous system.</p>
            <p className="mt-6 max-w-[60ch] leading-[1.8] text-vow-muted">No generic motivational feed. No plan that disappears after day one. The point is to make the next piece of work clear, give it a place to happen and learn from what you actually do.</p>
          </div>
        </div>

        <ul className="mt-14 grid gap-5 md:grid-cols-3">
          {steps.map(([n, title, body]) => (
            <li key={n} className="group border border-vow-border bg-vow-bg p-7 transition-all duration-300 hover:-translate-y-1 hover:border-vow-blue md:p-9">
              <span className="vow-label text-vow-blue">{n}</span>
              <h3 className="mt-14 text-[clamp(1.8rem,3vw,2.6rem)] leading-none">{title}</h3>
              <p className="mt-6 leading-[1.75] text-vow-muted">{body}</p>
              <span className="mt-10 block text-xl text-vow-blue transition-transform duration-300 group-hover:translate-x-2">→</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-vow-border bg-vow-surface/35">
        <div className="container-site py-20 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="vow-label">What VOW puts together</p>
            <h2 className="mt-5 text-[clamp(2.5rem,5vw,4.5rem)] leading-[.92]">From the idea in your head to the work in your week.</h2>
            <p className="mx-auto mt-6 max-w-[58ch] leading-[1.8] text-vow-muted">The system is designed around the full loop: define the outcome, build the route, schedule the sessions, do the work and review the result.</p>
          </div>

          <div className="mt-14 grid gap-px border border-vow-border bg-vow-border sm:grid-cols-2">
            {[
              ["AI-assisted planning", "Get a structured starting point without handing control of the goal away."],
              ["Sessions & reminders", "Turn milestones into concrete blocks of work you can actually show up for."],
              ["Calendar connections", "Bring planned work into the tools you already use."],
              ["Reviews & journal", "Keep a record of what happened and use it to shape what comes next."],
            ].map(([title, body]) => (
              <div key={title} className="bg-vow-bg p-7 md:p-9">
                <h3 className="text-2xl">{title}</h3>
                <p className="mt-3 max-w-[42ch] leading-[1.7] text-vow-muted">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-vow-bg text-vow-ink">
        <div className="container-site py-20 sm:py-28">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="vow-label !text-vow-ink">Built for follow-through</p>
              <h2 className="mt-5 max-w-4xl text-[clamp(3rem,7vw,6.5rem)] leading-[.86]">Less inspiration.<br />More evidence.</h2>
            </div>
            <div className="lg:col-span-4">
              <p className="leading-[1.8] text-vow-ink/70">VOW is about the part after the goal is written down: the work, the review and the decision to keep going.</p>
              <div className="mt-8"><Link to="/work" className="vow-arrow-light">Explore VOW <span aria-hidden>→</span></Link></div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-site py-20 sm:py-28">
        <div className="flex flex-col gap-8 border-t border-vow-border pt-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="vow-label">Have a question?</p>
            <h2 className="mt-4 text-[clamp(2.6rem,5vw,4.5rem)] leading-[.9]">Contact us or talk to us.</h2>
          </div>
          <Link to="/support" className="vow-btn-primary">Get in touch</Link>
        </div>
      </section>
    </>
  );
}
