//create the rankings tables
//create the rankings data store
//download team logos for new teams
let rankingContainers = document.getElementsByClassName('rankingContainer');
let playoffRank = document.getElementById('playoffRank');
let apRank = document.getElementById('apRank');
let coachesRank = document.getElementById('coachesRank');

class RankingsTeams {
  constructor(teamCommonNameMascot, record, playoffRank, apRank, apRankPoints, coachesRank, coachesRankPoints, fileName) {
    this.teamCommonNameMascot = teamCommonNameMascot;
    this.record = record;
    this.playoffRank = playoffRank;
    this.apRank = apRank;
    this.apRankPoints = apRankPoints;
    this.coachesRank = coachesRank;
    this.coachesRankPoints = coachesRankPoints;
    this.fileName = fileName;
  }
}

//create RankingsTeams instances
let alabama = new RankingsTeams('Alabama Crimson Tide', '8-0', '', 1, 1500, 1, 1598, 'alabama');
let clemson = new RankingsTeams('Clemson Tigers', '8-0', '', 2, 1433, 2, 1537, 'clemson');
let notreDame = new RankingsTeams('Notre Dame Fighting Irish', '8-0', '', 3, 1347, 3, 1458, 'notre-dame');
let lsu = new RankingsTeams('LSU Tigers', '7-1', '', 4, 1317, 4, 1403, 'lsu-purple');
let michigan = new RankingsTeams('Michigan Wolverines', '7-1', '', 5, 1240, 5, 1295, 'michigan');
let texas = new RankingsTeams('Texas Longhorns', '6-2', '', 15, 719, 15, 721, 'texas');
let georgia = new RankingsTeams('Georgia Bulldogs', '7-1', '', 6, 1202, 5, 1295, 'georgia');
let oklahoma = new RankingsTeams('Oklahoma Sooners', '7-1', '', 7, 1132, 7, 1190, 'oklahoma');
let florida = new RankingsTeams('Florida Gators', '6-2', '', 13, 734, 14, 743, 'florida');
let ucf = new RankingsTeams('UCF Knights', '7-0', '', 9, 1014, 9, 1082, 'ucf');
let ohioState = new RankingsTeams('Ohio State Buckeyes', '7-1', '', 8, 1022, 8, 1096, 'ohio-state');
let kentucky = new RankingsTeams('Kentucky Wildcats', '7-1', '', 11, 905, 12, 932, 'kentucky');
let westVirginia = new RankingsTeams('West Virginia Moutaineers', '6-1', '', 12, 891, 10, 992, 'west-virginia');
let washingtonState = new RankingsTeams('Washington State Cougars', '7-1', '', 10, 938, 11, 932, 'washington-state');
let washington = new RankingsTeams('Washington Huskies', '6-3', '', 26, '', 19, 285, 'washington');
let texasAm = new RankingsTeams('Texas A&M Aggies', '5-3', '', 25, 132, 26, '', 'texas-am');
let pennState = new RankingsTeams('Penn State Nittany Lions', '6-2', '', 14, 733, 13, 791, 'penn-state');
let iowa = new RankingsTeams('Iowa Hawkeyes', '6-2', '', 19, 323, 18, 356, 'iowa');
let oregon = new RankingsTeams('Oregon Ducks', '5-2', '', 0, 0, 0, 0, 'oregon');
let wisconsin = new RankingsTeams('Wisconsin Badgers', '5-2', '', 0, 0, 0, 0, 'wisconsin');
let southFlorida = new RankingsTeams('South Florida Bulls', '7-0', '', 0, 0, 0, 0, 'south-florida');
let ncState = new RankingsTeams('NC State Wolfpack', '5-1', '', 0, 0, 0, 0, 'nc-state');
let utah = new RankingsTeams('Utah Utes', '6-2', '', 16, 593, 16, 620, 'utah');
let stanford = new RankingsTeams('Stanford Cardinal', '5-2', '', 0, 0, 0, 0, 'stanford');
let appalachianState = new RankingsTeams('Appalachian State Mountaineers', '5-1', '', 0, 0, 0, 0, 'appalachian-state');
let miami = new RankingsTeams('Miami Hurricanes', '5-2', '', 0, 0, 0, 0, 'miami');
let houston = new RankingsTeams('Houston Cougars', '7-1', '', 17, 403, 17, 380, 'houston')
let utahState = new RankingsTeams('Utah State Aggies', '7-1', '', 18, 340, 20, 281, 'utah-state');
let fresnoState = new RankingsTeams('Fresno State Bulldogs', '7-1', '', 20, 261, 23, 191, 'fresno-state');
let mississippiState = new RankingsTeams('Mississippi State Bulldogs', '5-3', '', 21, 204, 21, 226, 'mississippi-state');
let syracuse = new RankingsTeams('Syracuse Orange', '6-2', '', 22, 192, 24, 183, 'syracuse');
let virginia = new RankingsTeams('Virginia Cavaliers', '6-2', '', 23, 175, 22, 207, 'virginia');
let bostonCollege = new RankingsTeams('Boston College Eagles', '6-2', '', 24, 169, 25, 171, 'boston-college');

//put the RankingsTeams instances in an array to be sorted later
const teamsArray = [ alabama, clemson, notreDame, lsu, michigan, texas, georgia, oklahoma, florida, ucf, ohioState, kentucky, westVirginia, washingtonState, washington, texasAm, pennState, iowa, utah, houston, utahState, fresnoState, mississippiState, syracuse, virginia, bostonCollege ];

//creates the tables to hold the rankings for each poll
function createRankingsTable(rankingsId) {
  //sort teams array by respective rankings from 1 - 25
  teamsArray.sort(function(a, b) {
    if (a[rankingsId] < b[rankingsId]) return -1;
    if (a[rankingsId] > b[rankingsId]) return 1;
    return 0;
  });

  //hide playoffRank rankingContainer if teamsArray[0] has no rank
  !Number.isInteger(teamsArray[0].playoffRank) ? playoffRank.style.display = 'none' : playoffRank.style.display = 'block';

  //return without creating a table if current rankingsId is playoffRank and teamsArray[0].playoffRank is NaN
  if (rankingsId === 'playoffRank' && !Number.isInteger(teamsArray[0].playoffRank)) return;

  //create table to append content to
  let rankingsTable = document.createElement('table');

  //create and append thead and th elements to table
  let rankingsTableHead = document.createElement('thead');
  let rankingsTableHeadRow = document.createElement('tr');
  let rankingsTableHeadRowRk = document.createElement('th');
  rankingsTableHeadRowRk.textContent = 'RK';
  let rankingsTableHeadRowTeam = document.createElement('th');
  rankingsTableHeadRowTeam.setAttribute('colspan', '2');
  rankingsTableHeadRowTeam.textContent = "TEAM";
  let rankingsTableHeadRowRec = document.createElement('th');
  rankingsTableHeadRowRec.textContent = 'REC';
  let rankingsTableHeadRowPts = document.createElement('th');
  rankingsTableHeadRowPts.textContent = 'PTS';
  rankingsTableHeadRow.appendChild(rankingsTableHeadRowRk);
  rankingsTableHeadRow.appendChild(rankingsTableHeadRowTeam);
  rankingsTableHeadRow.appendChild(rankingsTableHeadRowRec);
  if (rankingsId !== 'playoffRank') rankingsTableHeadRow.appendChild(rankingsTableHeadRowPts);
  rankingsTableHead.appendChild(rankingsTableHeadRow);
  rankingsTable.appendChild(rankingsTableHead);

  //create tbody element
  let rankingsTableBody = document.createElement('tbody');

  //create rows for each of the 25 teams
  for (var i = 0; i < 25; i++) {
    let rankingsTableBodyRow = document.createElement('tr');
    //create 4 common rows for all 3 rankingsTables (e.g. RK, TEAM[teamlogo, teamname] , REC)
    let rankingsTableBodyRowRank = document.createElement('td');
    rankingsTableBodyRowRank.textContent = teamsArray[i][rankingsId];
    let rankingsTableBodyRowImgTd = document.createElement('td');
    let rankingsTableBodyRowImg = document.createElement('img');
    rankingsTableBodyRowImg.src = `images/${teamsArray[i].fileName}.png`;
    rankingsTableBodyRowImgTd.appendChild(rankingsTableBodyRowImg);
    let rankingsTableBodyRowTeamName = document.createElement('td');
    rankingsTableBodyRowTeamName.textContent = teamsArray[i].teamCommonNameMascot;
    let rankingsTableBodyRowRec = document.createElement('td');
    rankingsTableBodyRowRec.textContent = teamsArray[i].record;

    //append common rows and content
    rankingsTableBodyRow.appendChild(rankingsTableBodyRowRank);
    rankingsTableBodyRow.appendChild(rankingsTableBodyRowImgTd);
    rankingsTableBodyRow.appendChild(rankingsTableBodyRowTeamName);
    rankingsTableBodyRow.appendChild(rankingsTableBodyRowRec);

    //create and append points td only for AP Poll and Coaches Poll
    if (rankingsId !== 'playoffRank') {
      let rankingsTableBodyRowPts = document.createElement('td');
      rankingsTableBodyRowPts.textContent = teamsArray[i][`${rankingsId}Points`];
      rankingsTableBodyRow.appendChild(rankingsTableBodyRowPts);
    };

    rankingsTableBody.appendChild(rankingsTableBodyRow);
  }

  rankingsTable.appendChild(rankingsTableBody);
  rankingContainers[rankingsId].appendChild(rankingsTable);
}

for (var i = 0; i < rankingContainers.length; i++) {
  //run the function for each poll in the rankingContainers array
  createRankingsTable(rankingContainers[i].id);
}
