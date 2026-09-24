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
<circle cx="1533.4" cy="537.5" r="1.2"/>
<circle cx="1579.0" cy="531.4" r="1.3"/>
<circle cx="1512.7" cy="523.2" r="1.2"/>
<path d="M1445.4 418.4Q1447.8 421.3 1445.4 422.6Q1443.0 424.0 1440.8 425.9Q1438.6 427.9 1436.3 425.9Q1434.0 423.9 1432.8 420.3Q1431.7 416.8 1434.2 415.9Q1436.8 415.1 1439.9 415.3Q1443.0 415.5 1445.4 418.4Z"/>
<path d="M1580.8 498.7Q1581.9 504.0 1579.8 509.4Q1577.8 514.8 1571.8 515.4Q1565.8 515.9 1561.5 512.9Q1557.2 509.9 1556.9 506.2Q1556.5 502.5 1559.3 496.8Q1562.0 491.2 1570.8 492.3Q1579.6 493.4 1580.8 498.7Z"/>
<path d="M1586.5 436.1Q1587.5 438.2 1586.1 442.1Q1584.6 446.0 1581.3 446.5Q1578.0 446.9 1576.3 443.8Q1574.6 440.7 1574.3 439.2Q1573.9 437.7 1576.8 435.1Q1579.6 432.5 1582.6 433.3Q1585.5 434.0 1586.5 436.1Z"/>
<circle cx="1391.8" cy="382.3" r="1.2"/>
<circle cx="1554.3" cy="557.5" r="1.5"/>
<path d="M1485.8 451.7Q1488.9 456.8 1486.4 464.6Q1483.8 472.4 1475.9 469.5Q1467.9 466.6 1460.8 466.1Q1453.7 465.5 1456.9 459.0Q1460.1 452.5 1462.8 445.9Q1465.4 439.2 1474.0 442.9Q1482.7 446.6 1485.8 451.7Z"/>
<path d="M1480.0 520.0Q1524.2 517.6 1530.2 480.4" fill="none" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M849.9 109.4Q848.4 124.2 853.3 129.2Q858.2 134.3 843.0 135.3Q827.9 136.3 820.7 137.2Q813.5 138.2 803.3 143.1Q793.1 148.1 787.5 140.7Q782.0 133.3 792.6 126.0Q803.3 118.6 803.3 112.5Q803.3 106.3 809.1 101.3Q814.8 96.4 821.6 91.0Q828.4 85.6 839.9 90.1Q851.5 94.6 849.9 109.4Z"/>
<circle cx="852.7" cy="96.8" r="2.6"/>
<circle cx="918.5" cy="119.3" r="4.1"/>
<circle cx="768.3" cy="181.9" r="1.2"/>
<path d="M868.9 146.3Q871.2 148.7 868.7 151.6Q866.1 154.5 861.9 157.6Q857.7 160.6 854.0 156.6Q850.3 152.6 851.1 148.5Q852.0 144.4 853.8 142.9Q855.6 141.4 861.1 142.7Q866.7 143.9 868.9 146.3Z"/>
<circle cx="876.5" cy="138.0" r="3.2"/>
<circle cx="798.1" cy="152.8" r="1.8"/>
<circle cx="814.2" cy="35.7" r="5.1"/>
<circle cx="810.7" cy="148.2" r="4.3"/>
<circle cx="784.7" cy="147.6" r="1.2"/>
<circle cx="872.6" cy="84.7" r="3.4"/>
<circle cx="867.7" cy="370.2" r="1.8"/>
<circle cx="933.1" cy="256.0" r="1.2"/>
<circle cx="853.7" cy="141.6" r="1.4"/>
<circle cx="817.3" cy="170.7" r="4.3"/>
<circle cx="835.3" cy="106.9" r="2.9"/>
<circle cx="714.6" cy="103.9" r="2.1"/>
<circle cx="864.8" cy="110.8" r="1.2"/>
<circle cx="685.1" cy="117.1" r="1.2"/>
<path d="M835.8 208.5Q838.3 215.5 835.7 219.7Q833.2 224.0 825.4 224.0Q817.7 224.1 811.4 223.0Q805.0 221.8 805.3 213.8Q805.6 205.8 811.2 205.3Q816.7 204.7 825.0 203.1Q833.2 201.5 835.8 208.5Z"/>
<path d="M780.9 59.5Q782.9 61.0 780.9 63.5Q778.8 65.9 776.4 65.7Q773.9 65.5 771.5 65.1Q769.2 64.7 769.9 62.2Q770.7 59.8 772.5 57.9Q774.4 56.1 776.7 57.1Q778.9 58.1 780.9 59.5Z"/>
<path d="M694.0 149.2Q695.0 153.4 693.6 157.0Q692.1 160.6 689.6 161.1Q687.0 161.7 683.7 159.2Q680.4 156.7 680.8 153.5Q681.1 150.3 683.0 148.1Q684.9 145.9 688.9 145.5Q693.0 145.0 694.0 149.2Z"/>
<circle cx="769.2" cy="118.4" r="1.2"/>
<circle cx="897.4" cy="105.2" r="1.3"/>
<circle cx="849.3" cy="281.4" r="5.7"/>
<circle cx="838.9" cy="165.5" r="1.3"/>
<path d="M820.0 120.0Q799.5 127.9 743.2 164.1" fill="none" strokeWidth="2.5" strokeLinecap="round"/>
<path d="M820.0 120.0Q818.4 155.7 845.4 227.2" fill="none" strokeWidth="1.7" strokeLinecap="round"/>
<path d="M151.2 84.8Q152.5 95.0 144.7 98.4Q136.9 101.8 132.7 107.3Q128.4 112.8 121.7 111.0Q115.0 109.3 111.7 105.0Q108.5 100.7 103.3 99.6Q98.1 98.5 89.9 92.3Q81.8 86.0 88.7 76.1Q95.5 66.2 106.4 71.4Q117.3 76.6 125.5 70.1Q133.8 63.6 141.9 69.1Q149.9 74.7 151.2 84.8Z"/>
<circle cx="63.7" cy="125.4" r="1.2"/>
<circle cx="250.5" cy="119.0" r="1.2"/>
<path d="M150.5 74.0Q152.7 77.2 150.5 81.4Q148.3 85.6 144.4 85.4Q140.6 85.2 134.2 83.8Q127.8 82.5 131.4 78.2Q135.1 73.9 136.8 68.4Q138.5 62.9 143.4 66.9Q148.3 70.9 150.5 74.0Z"/>
<circle cx="185.7" cy="58.1" r="6.5"/>
<circle cx="130.0" cy="20.6" r="1.9"/>
<path d="M86.7 132.4Q87.3 134.8 86.2 136.8Q85.1 138.7 82.3 140.5Q79.5 142.4 75.6 140.2Q71.8 138.1 73.7 136.3Q75.6 134.4 77.9 132.3Q80.2 130.2 83.1 130.0Q86.1 129.9 86.7 132.4Z"/>
<circle cx="119.0" cy="9.1" r="1.2"/>
<circle cx="97.3" cy="170.4" r="6.4"/>
<circle cx="135.2" cy="135.9" r="1.5"/>
<path d="M144.4 135.9Q149.7 143.7 145.8 154.5Q141.8 165.3 133.0 163.1Q124.1 160.9 113.4 157.2Q102.7 153.5 101.4 145.7Q100.1 137.9 109.1 129.7Q118.0 121.5 128.5 124.7Q139.1 128.0 144.4 135.9Z"/>
<circle cx="85.6" cy="127.2" r="1.5"/>
<circle cx="73.2" cy="56.2" r="5.3"/>
<circle cx="144.2" cy="170.4" r="5.4"/>
<circle cx="129.7" cy="112.6" r="2.0"/>
<circle cx="133.1" cy="133.5" r="1.2"/>
<circle cx="206.1" cy="153.7" r="2.3"/>
<path d="M120.0 90.0Q68.3 65.0 49.3 67.0" fill="none" strokeWidth="3.2" strokeLinecap="round"/>
<path d="M120.0 90.0Q89.9 122.4 75.3 118.5" fill="none" strokeWidth="2.3" strokeLinecap="round"/>
<path d="M1545.7 818.1Q1550.8 819.3 1545.3 822.2Q1539.9 825.2 1537.2 826.2Q1534.5 827.2 1531.1 831.8Q1527.7 836.5 1523.1 831.9Q1518.5 827.3 1517.0 827.0Q1515.5 826.7 1518.3 821.5Q1521.1 816.2 1520.1 813.9Q1519.1 811.6 1522.7 808.2Q1526.4 804.8 1530.3 805.4Q1534.2 805.9 1537.4 811.4Q1540.6 816.8 1545.7 818.1Z"/>
<path d="M1571.1 826.8Q1576.0 829.4 1570.2 834.1Q1564.5 838.9 1560.9 840.6Q1557.4 842.4 1552.8 837.5Q1548.2 832.7 1547.1 829.1Q1546.0 825.5 1550.3 822.8Q1554.6 820.1 1560.4 822.1Q1566.2 824.2 1571.1 826.8Z"/>
<circle cx="1536.2" cy="688.9" r="1.2"/>
<circle cx="1491.8" cy="792.4" r="4.1"/>
<circle cx="1500.9" cy="790.2" r="4.5"/>
<circle cx="1459.7" cy="855.4" r="5.2"/>
<circle cx="1499.7" cy="830.5" r="5.1"/>
<circle cx="1505.1" cy="821.6" r="1.4"/>
<circle cx="1532.8" cy="787.7" r="1.2"/>
<circle cx="1445.9" cy="834.3" r="1.2"/>
<circle cx="1560.3" cy="851.7" r="3.0"/>
<circle cx="1498.9" cy="818.0" r="1.2"/>
<circle cx="1541.8" cy="752.8" r="3.5"/>
<circle cx="1550.4" cy="813.5" r="1.2"/>
<circle cx="1538.9" cy="799.5" r="1.2"/>
<circle cx="1553.9" cy="806.1" r="1.2"/>
<path d="M1530.0 820.0Q1521.8 776.9 1548.3 745.7" fill="none" strokeWidth="3.4" strokeLinecap="round"/>
<path d="M1530.0 820.0Q1541.3 864.1 1570.6 882.9" fill="none" strokeWidth="1.9" strokeLinecap="round"/>
<path d="M574.1 295.4Q576.1 298.4 573.4 301.4Q570.6 304.4 573.0 313.2Q575.4 322.0 565.5 317.5Q555.7 313.0 552.2 314.5Q548.7 316.0 541.4 312.0Q534.0 308.0 533.8 300.8Q533.6 293.7 541.1 288.6Q548.6 283.6 554.1 283.7Q559.6 283.8 563.8 284.4Q568.0 285.0 570.1 288.7Q572.1 292.4 574.1 295.4Z"/>
<path d="M1204.6 414.7Q1204.8 418.8 1202.2 426.4Q1199.5 434.0 1191.5 432.4Q1183.4 430.7 1180.8 431.4Q1178.2 432.0 1174.6 429.6Q1170.9 427.2 1168.1 424.2Q1165.2 421.2 1162.1 417.4Q1159.1 413.6 1165.2 411.7Q1171.4 409.8 1174.2 408.7Q1177.1 407.7 1185.3 406.0Q1193.5 404.2 1198.9 407.4Q1204.3 410.5 1204.6 414.7Z"/>
<circle cx="1176.4" cy="350.8" r="1.2"/>
<circle cx="1183.9" cy="454.9" r="1.2"/>
<path d="M1177.3 435.3Q1178.3 438.0 1177.8 441.6Q1177.2 445.1 1172.7 446.6Q1168.2 448.1 1163.7 445.1Q1159.2 442.0 1160.4 438.4Q1161.7 434.7 1165.4 431.4Q1169.1 428.2 1172.7 430.4Q1176.3 432.7 1177.3 435.3Z"/>
<circle cx="1289.5" cy="348.1" r="4.3"/>
<circle cx="1137.3" cy="306.1" r="2.8"/>
<circle cx="1282.8" cy="257.3" r="4.4"/>
<circle cx="1259.3" cy="321.1" r="3.7"/>
<path d="M1197.8 452.6Q1198.6 458.7 1196.8 462.9Q1195.1 467.0 1192.2 467.5Q1189.3 467.9 1183.0 466.2Q1176.7 464.6 1176.8 460.7Q1176.9 456.7 1182.6 451.0Q1188.2 445.2 1192.6 445.9Q1197.0 446.5 1197.8 452.6Z"/>
<circle cx="1217.7" cy="406.2" r="1.2"/>
<path d="M1198.5 449.7Q1200.1 454.5 1197.3 456.4Q1194.5 458.3 1191.6 460.1Q1188.8 461.9 1185.0 459.2Q1181.3 456.5 1181.4 453.5Q1181.4 450.5 1184.2 447.7Q1187.1 444.8 1192.0 444.9Q1197.0 444.9 1198.5 449.7Z"/>
<circle cx="1211.7" cy="426.3" r="2.8"/>
<circle cx="1152.7" cy="431.5" r="6.5"/>
<circle cx="1096.7" cy="399.8" r="1.2"/>
<circle cx="1265.7" cy="319.4" r="1.2"/>
<circle cx="1272.0" cy="420.8" r="1.2"/>
<circle cx="1182.0" cy="393.4" r="3.6"/>
<path d="M1165.7 417.6Q1167.6 420.3 1165.2 423.8Q1162.9 427.3 1160.5 427.4Q1158.1 427.5 1155.6 425.6Q1153.2 423.7 1151.3 421.1Q1149.4 418.6 1153.8 416.1Q1158.1 413.7 1161.0 414.3Q1163.9 414.8 1165.7 417.6Z"/>
<circle cx="1207.8" cy="436.7" r="1.2"/>
<path d="M1186.2 447.3Q1188.8 450.4 1187.4 454.0Q1185.9 457.7 1179.4 460.0Q1173.0 462.3 1170.4 458.4Q1167.9 454.4 1167.1 448.9Q1166.3 443.5 1169.8 441.8Q1173.4 440.1 1178.5 442.2Q1183.6 444.3 1186.2 447.3Z"/>
<circle cx="1197.7" cy="404.4" r="1.9"/>
<path d="M1166.8 352.6Q1167.8 355.3 1167.4 358.2Q1166.9 361.2 1163.2 362.3Q1159.5 363.4 1156.8 360.9Q1154.1 358.5 1153.3 356.0Q1152.5 353.6 1156.0 350.5Q1159.5 347.4 1162.7 348.7Q1165.8 349.9 1166.8 352.6Z"/>
<circle cx="1189.3" cy="453.2" r="2.7"/>
<circle cx="1188.2" cy="388.9" r="6.2"/>
<path d="M1180.0 420.0Q1141.6 405.6 1106.1 419.8" fill="none" strokeWidth="3.0" strokeLinecap="round"/>
<circle cx="1452.8" cy="387.0" r="2.1"/>
<circle cx="1198.6" cy="379.0" r="1.3"/>
<circle cx="1155.6" cy="792.1" r="2.5"/>
<circle cx="1005.2" cy="88.1" r="1.7"/>
<circle cx="1007.4" cy="225.1" r="1.7"/>
<circle cx="1488.3" cy="164.8" r="2.2"/>
<circle cx="1245.1" cy="349.8" r="1.9"/>
<circle cx="1559.4" cy="34.3" r="2.0"/>
<circle cx="865.7" cy="645.6" r="1.9"/>
<circle cx="834.7" cy="369.3" r="2.9"/>
<circle cx="568.8" cy="51.0" r="1.4"/>
<circle cx="639.5" cy="12.0" r="1.7"/>
<circle cx="877.2" cy="112.6" r="2.6"/>
<circle cx="297.4" cy="2.4" r="2.4"/>
<circle cx="1054.8" cy="326.2" r="2.8"/>
<circle cx="1367.1" cy="51.4" r="2.6"/>
<circle cx="1013.1" cy="13.5" r="0.8"/>
<circle cx="1522.8" cy="590.4" r="1.4"/>
<circle cx="162.4" cy="128.5" r="1.3"/>
<circle cx="1242.1" cy="311.8" r="1.1"/>
<circle cx="973.4" cy="703.2" r="2.3"/>
<circle cx="1342.1" cy="177.6" r="2.3"/>
<circle cx="849.3" cy="667.7" r="1.8"/>
<circle cx="1380.6" cy="5.9" r="2.6"/>
<circle cx="1537.0" cy="67.9" r="2.2"/>
<circle cx="1017.8" cy="25.7" r="2.1"/>
<circle cx="1092.1" cy="838.3" r="1.5"/>
<circle cx="1570.7" cy="459.6" r="1.9"/>
<circle cx="1436.1" cy="30.5" r="2.4"/>
<circle cx="1000.4" cy="304.7" r="2.7"/>
<circle cx="840.9" cy="693.5" r="1.3"/>
<circle cx="886.4" cy="744.1" r="1.4"/>
<circle cx="1324.4" cy="363.4" r="1.9"/>
<circle cx="1560.0" cy="589.1" r="2.5"/>
<circle cx="1015.7" cy="705.8" r="0.9"/>
<circle cx="1156.3" cy="797.0" r="2.0"/>
<circle cx="9.9" cy="170.9" r="2.8"/>
<circle cx="973.9" cy="592.2" r="2.5"/>
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
