//declaring scoreboard variables
let scoreboard = document.querySelector('.scoreboard');
let scoreboardH1 = document.getElementById('scoreboardH1');
let weekSelector = document.querySelector('#weekSelector');
let gameDates = document.getElementsByClassName('gameDate');
let gameContainers = document.getElementsByClassName('gameContainer');
let games = document.getElementsByClassName('game');
let gameTimes = document.getElementsByClassName('gameTime');
let gameResults = document.getElementsByClassName('gameResult');
let awayTeamRows = document.getElementsByClassName('awayTeamRow');
let homeTeamRows = document.getElementsByClassName('homeTeamRow');
let awayTeamLogos = document.getElementsByClassName('awayTeamLogo');
let awayTeamRanks = document.getElementsByClassName('awayTeamRank');
let awayTeamNames = document.getElementsByClassName('awayTeamName');
let awayTeamScores = document.getElementsByClassName('awayTeamScore');
let homeTeamLogos = document.getElementsByClassName('homeTeamLogo');
let homeTeamRanks = document.getElementsByClassName('homeTeamRank');
let homeTeamNames = document.getElementsByClassName('homeTeamName');
let homeTeamScores = document.getElementsByClassName('homeTeamScore');

//creating the SecTeam constructor
class SecTeam {
  constructor(universityName, commonName, imgUrl, mascot, conference, division, ranking, confWins, confLosses, ovrWins, ovrLosses) {
    this.universityName = universityName;
    this.commonName = commonName;
    this.imgUrl = imgUrl;
    this.mascot = mascot;
    this.conference = conference;
    this.division = division;
    this.ranking = ranking;
    this.confWins = confWins;
    this.confLosses = confLosses;
    this.ovrWins = ovrWins;
    this.ovrLosses = ovrLosses;
  }
}

//creating the SecTeam instances for each SEC team
let alabama = new SecTeam('University of Alabama', 'Alabama', 'alabama', 'Crimson Tide', 'SEC', 'West', 1, 5, 0, 8, 0);
let arkansas = new SecTeam('University of Arkansas', 'Arkansas', 'arkansas', 'Razorbacks', 'SEC', 'West', 0, 0, 5, 2, 7);
let auburn = new SecTeam('Auburn University', 'Auburn', 'auburn', 'Tigers', 'SEC', 'West', 0, 2, 3, 5, 3);
let florida = new SecTeam('University of Florida', 'Florida', 'florida', 'Gators', 'SEC', 'East', 9, 4, 2, 6, 2);
let georgia = new SecTeam('University of Georgia', 'Georgia', 'georgia', 'Bulldogs', 'SEC', 'East', 7, 5, 1, 7, 1);
let kentucky = new SecTeam('University of Kentucky', 'Kentucky', 'kentucky', 'Wildcats', 'SEC', 'East', 12, 5, 1, 7, 1);
let lsu = new SecTeam('Louisiana State University', 'LSU', 'lsu-purple', 'Tigers', 'SEC', 'West', 4, 4, 1, 7, 1);
let mississippi = new SecTeam('University of Mississippi', 'Ole Miss', 'mississippi', 'Rebels', 'SEC', 'West', 0, 1, 3, 5, 3);
let mississippiState = new SecTeam('Mississippi State University', 'Mississippi State', 'mississippi-state', 'Bulldogs', 'SEC', 'West', 0, 2, 3, 5, 3);
let missouri = new SecTeam('University of Missouri', 'Missouri', 'missouri', 'Tigers', 'SEC', 'East', 0, 0, 4, 4, 4);
let southCarolina = new SecTeam('University of South Carolina', 'South Carolina', 'south-carolina', 'Gamecocks', 'SEC', 'East', 0, 3, 3, 4, 3);
let tennessee = new SecTeam('University of Tennessee', 'Tennessee', 'tennessee', 'Volunteers', 'SEC', 'East', 0, 1, 4, 3, 5);
let texasAm = new SecTeam('Texas A&M University', 'Texas A&M', 'texas-am', 'Aggies', 'SEC', 'West', 16, 3, 2, 5, 3);
let vanderbilt = new SecTeam('Vanderbilt University', 'Vanderbilt', 'vanderbilt', 'Commodores', 'SEC', 'East', 0, 1, 4, 4, 5);

//creating the NonSecTeam constructor, as not as much information is needed
class NonSecTeam {
  constructor(commonName, imgUrl, mascot) {
    this.commonName = commonName;
    this.imgUrl = imgUrl;
    this.mascot = mascot;
  }
}

//creating team instances for non-SEC teams
let tulsa = new NonSecTeam('Tulsa', 'tulsa', 'Golden Hurricanes');
let memphis = new NonSecTeam('Memphis', 'memphis', 'Tigers');
let louisianaTech = new NonSecTeam('Louisiana Tech', 'louisiana-tech', 'Bulldogs');
let charlotte = new NonSecTeam('Charlotte', 'charlotte', '49ers');
let citadel = new NonSecTeam('The Citadel', 'citadel', 'Bulldogs');
let rice = new NonSecTeam('Rice', 'rice', 'Owls');
let umass = new NonSecTeam('UMass', 'umass', 'Minutemen');
let idaho = new NonSecTeam('Idaho', 'idaho', 'Vandals');
let middleTennessee = new NonSecTeam('Middle Tennessee', 'middle-tennessee', 'Blue Raiders');
let uab = new NonSecTeam('UAB', 'uab', 'Blazers');
let liberty = new NonSecTeam('Liberty', 'liberty', 'Flames');
let chattanooga = new NonSecTeam('Chattanooga', 'chattanooga', 'Mocs');
let clemson = new NonSecTeam('Clemson', 'clemson', 'Tigers');
let georgiaTech = new NonSecTeam('Georgia Tech', 'georgia-tech', 'Yellow Jackets');
let floridaState = new NonSecTeam('Florida State', 'florida-state', 'Seminoles');
let louisville = new NonSecTeam('Louisville', 'louisville', 'Cardinals');

//creating the data store to act as a makeshift database... this is needed since I don't have access to Node or a database and have yet to learn internalStorage
let schedule = {
  week7:  {
    days: 1,
    day0: {
      date: 'Saturday, October 13, 2018',
      games: {
        game0: {
          gameTime: '',
          awayTeam: missouri,
          awayRank: 0,
          awayScore: 10,
          homeTeam: alabama,
          homeRank: 1,
          homeScore: 39,
          final: true
        },
        game1: {
          gameTime: '',
          awayTeam: georgia,
          awayRank: 2,
          awayScore: 16,
          homeTeam: lsu,
          homeRank: 13,
          homeScore: 36,
          final: true
        },
        game2: {
          gameTime: '',
          awayTeam: florida,
          awayRank: 14,
          awayScore: 37,
          homeTeam: vanderbilt,
          homeRank: 0,
          homeScore: 27,
          final: true
        },
        game3: {
          gameTime: '',
          awayTeam: tennessee,
          awayRank: 0,
          awayScore: 30,
          homeTeam: auburn,
          homeRank: 21,
          homeScore: 24,
          final: true
        },
        game4: {
          gameTime: '',
          awayTeam: texasAm,
          awayRank: 22,
          awayScore: 26,
          homeTeam: southCarolina,
          homeRank: 0,
          homeScore: 23,
          final: true
        },
        game5: {
          gameTime: '',
          awayTeam: mississippi,
          awayRank: 0,
          awayScore: 37,
          homeTeam: arkansas,
          homeRank: 0,
          homeScore: 33,
          final: true
        }
      }
    }
  },
  week8: {
    days: 1,
    day0: {
      date: 'Saturday, October 20, 2018',
      games: {
        game0: {
          gameTime: '12:00 PM ET',
          awayTeam: tulsa,
          awayRank: 0,
          awayScore: 0,
          homeTeam: arkansas,
          homeRank: 0,
          homeScore: 23,
          final: true
        },
        game1: {
          gameTime: '12:00 PM ET',
          awayTeam: auburn,
          awayRank: 0,
          awayScore: 31,
          homeTeam: mississippi,
          homeRank: 0,
          homeScore: 16,
          final: true
        },
        game2: {
          gameTime: '3:30 PM ET',
          awayTeam: alabama,
          awayRank: 1,
          awayScore: 58,
          homeTeam: tennessee,
          homeRank: 0,
          homeScore: 21,
          final: true
        },
        game3: {
          gameTime: '4:00 PM ET',
          awayTeam: memphis,
          awayRank: 0,
          awayScore: 33,
          homeTeam: missouri,
          homeRank: 0,
          homeScore: 65,
          final: true
        },
        game4: {
          gameTime: '7:00 PM ET',
          awayTeam: mississippiState,
          awayRank: 22,
          awayScore: 3,
          homeTeam: lsu,
          homeRank: 4,
          homeScore: 19,
          final: true
        },
        game5: {
          gameTime: '7:30 PM ET',
          awayTeam: vanderbilt,
          awayRank: 0,
          awayScore: 7,
          homeTeam: kentucky,
          homeRank: 14,
          homeScore: 14,
          final: true
        }
      }
    }
  },
  week9: {
    days: 1,
    day0: {
      date: 'Saturday, October 27, 2018',
      games: {
        game0: {
          gameTime: '12:00 PM ET',
          awayTeam: vanderbilt,
          awayRank: 0,
          awayScore: 45,
          homeTeam: arkansas,
          homeRank: 0,
          homeScore: 31,
          final: true
        },
        game1: {
          gameTime: '3:30 PM ET',
          awayTeam: florida,
          awayRank: 9,
          awayScore: 17,
          homeTeam: georgia,
          homeRank: 7,
          homeScore: 36,
          final: true
        },
        game2: {
          gameTime: '4:00 PM ET',
          awayTeam: kentucky,
          awayRank: 12,
          awayScore: 15,
          homeTeam: missouri,
          homeRank: 0,
          homeScore: 14,
          final: true
        },
        game3: {
          gameTime: '7:00 PM ET',
          awayTeam: texasAm,
          awayRank: 16,
          awayScore: 13,
          homeTeam: mississippiState,
          homeRank: 0,
          homeScore: 28,
          final: true
        },
        game4: {
          gameTime: '7:30 PM ET',
          awayTeam: tennessee,
          awayRank: 0,
          awayScore: 24,
          homeTeam: southCarolina,
          homeRank: 0,
          homeScore: 27,
          final: true
        }
      }
    }
  },
  week10: {
    days: 1,
    day0: {
      date: 'Saturday, November 3, 2018',
      games: {
        game0: {
          gameTime: '12:00 PM ET',
          awayTeam: texasAm,
          awayRank: 20,
          awayScore: '',
          homeTeam: auburn,
          homeRank: 0,
          homeScore: '',
          final: false
        },
        game1: {
          gameTime: '12:00 PM ET',
          awayTeam: southCarolina,
          awayRank: 0,
          awayScore: '',
          homeTeam: mississippi,
          homeRank: 0,
          homeScore: '',
          final: false
        },
        game2: {
          gameTime: '3:30 PM ET',
          awayTeam: georgia,
          awayRank: 6,
          awayScore: '',
          homeTeam: kentucky,
          homeRank: 9,
          homeScore: '',
          final: false
        },
        game3: {
          gameTime: '4:00 PM ET',
          awayTeam: missouri,
          awayRank: 0,
          awayScore: '',
          homeTeam: florida,
          homeRank: 11,
          homeScore: '',
          final: false
        },
        game4: {
          gameTime: '4:00 PM ET',
          awayTeam: charlotte,
          awayRank: 0,
          awayScore: '',
          homeTeam: tennessee,
          homeRank: 0,
          homeScore: '',
          final: false
        },
        game5: {
          gameTime: '7:30 PM ET',
          awayTeam: louisianaTech,
          awayRank: 0,
          awayScore: '',
          homeTeam: mississippiState,
          homeRank: 18,
          homeScore: '',
          final: false
        },
        game6: {
          gameTime: '8:00 PM ET',
          awayTeam: alabama,
          awayRank: 1,
          awayScore: '',
          homeTeam: lsu,
          homeRank: 3,
          homeScore: '',
          final: false
        }
      }
    }
  },
  week11: {
    days: 1,
    day0: {
      date: 'Saturday, November 10, 2018',
      games: {
        game0: {
          gameTime: 'TBD',
          awayTeam: mississippiState,
          awayRank: 18,
          awayScore: '',
          homeTeam: alabama,
          homeRank: 1,
          homeScore: '',
          final: false
        },
        game1: {
          gameTime: 'TBD',
          awayTeam: lsu,
          awayRank: 3,
          awayScore: '',
          homeTeam: arkansas,
          homeRank: 0,
          homeScore: '',
          final: false
        },
        game2: {
          gameTime: 'TBD',
          awayTeam: auburn,
          awayRank: 0,
          awayScore: '',
          homeTeam: georgia,
          homeRank: 6,
          homeScore: '',
          final: false
        },
        game3: {
          gameTime: 'TBD',
          awayTeam: southCarolina,
          awayRank: 0,
          awayScore: '',
          homeTeam: florida,
          homeRank: 11,
          homeScore: '',
          final: false
        },
        game4: {
          gameTime: 'TBD',
          awayTeam: kentucky,
          awayRank: 9,
          awayScore: '',
          homeTeam: tennessee,
          homeRank: 0,
          homeScore: '',
          final: false
        },
        game5: {
          gameTime: 'TBD',
          awayTeam: mississippi,
          awayRank: 0,
          awayScore: '',
          homeTeam: texasAm,
          homeRank: 20,
          homeScore: '',
          final: false
        },
        game6: {
          gameTime: 'TBD',
          awayTeam: vanderbilt,
          awayRank: 0,
          awayScore: '',
          homeTeam: missouri,
          homeRank: 0,
          homeScore: '',
          final: false
        }
      }
    }
  },
  week12: {
    days: 1,
    day0: {
      date: 'Saturday, November 17, 2018',
      games: {
        game0: {
          gameTime: 'TBD',
          awayTeam: citadel,
          awayRank: 0,
          awayScore: '',
          homeTeam: alabama,
          homeRank: 1,
          homeScore: '',
          final: false
        },
        game1: {
          gameTime: 'TBD',
          awayTeam: rice,
          awayRank: 0,
          awayScore: '',
          homeTeam: lsu,
          homeRank: 3,
          homeScore: '',
          final: false
        },
        game2: {
          gameTime: 'TBD',
          awayTeam: umass,
          awayRank: 0,
          awayScore: '',
          homeTeam: georgia,
          homeRank: 6,
          homeScore: '',
          final: false
        },
        game3: {
          gameTime: 'TBD',
          awayTeam: idaho,
          awayRank: 0,
          awayScore: '',
          homeTeam: florida,
          homeRank: 11,
          homeScore: '',
          final: false
        },
        game4: {
          gameTime: 'TBD',
          awayTeam: middleTennessee,
          awayRank: 0,
          awayScore: '',
          homeTeam: kentucky,
          homeRank: 9,
          homeScore: '',
          final: false
        },
        game5: {
          gameTime: 'TBD',
          awayTeam: uab,
          awayRank: 0,
          awayScore: '',
          homeTeam: texasAm,
          homeRank: 20,
          homeScore: '',
          final: false
        },
        game6: {
          gameTime: 'TBD',
          awayTeam: arkansas,
          awayRank: 0,
          awayScore: '',
          homeTeam: mississippiState,
          homeRank: 18,
          homeScore: '',
          final: false
        },
        game7: {
          gameTime: 'TBD',
          awayTeam: liberty,
          awayRank: 0,
          awayScore: '',
          homeTeam: auburn,
          homeRank: 0,
          homeScore: '',
          final: false
        },
        game8: {
          gameTime: 'TBD',
          awayTeam: chattanooga,
          awayRank: 0,
          awayScore: '',
          homeTeam: southCarolina,
          homeRank: 0,
          homeScore: '',
          final: false
        },
        game9: {
          gameTime: 'TBD',
          awayTeam: missouri,
          awayRank: 0,
          awayScore: '',
          homeTeam: tennessee,
          homeRank: 0,
          homeScore: '',
          final: false
        },
        game10: {
          gameTime: 'TBD',
          awayTeam: mississippi,
          awayRank: 0,
          awayScore: '',
          homeTeam: vanderbilt,
          homeRank: 0,
          homeScore: '',
          final: false
        }
      }
    }
  },
  week13: {
    days: 3,
    day0: {
      date: 'Thursday, November 22, 2018',
      games: {
        game0: {
          gameTime: '7:30 PM ET',
          awayTeam: mississippiState,
          awayRank: 18,
          awayScore: '',
          homeTeam: mississippi,
          homeRank: 0,
          homeScore: '',
          final: false
        },
      }
    },
    day1: {
      date: 'Friday, November 23, 2018',
      games: {
        game0: {
          gameTime: '2:30 PM ET',
          awayTeam: arkansas,
          awayRank: 0,
          awayScore: '',
          homeTeam: missouri,
          homeRank: 0,
          homeScore: '',
          final: false
        },
      }
    },
    day2: {
      date: 'Saturday, November 24, 2018',
      games: {
        game0: {
          gameTime: 'TBD',
          awayTeam: auburn,
          awayRank: 0,
          awayScore: '',
          homeTeam: alabama,
          homeRank: 1,
          homeScore: '',
          final: false
        },
        game1: {
          gameTime: 'TBD',
          awayTeam: southCarolina,
          awayRank: 0,
          awayScore: '',
          homeTeam: clemson,
          homeRank: 2,
          homeScore: '',
          final: false
        },
        game2: {
          gameTime: 'TBD',
          awayTeam: lsu,
          awayRank: 3,
          awayScore: '',
          homeTeam: texasAm,
          homeRank: 20,
          homeScore: '',
          final: false
        },
        game3: {
          gameTime: 'TBD',
          awayTeam: georgiaTech,
          awayRank: 0,
          awayScore: '',
          homeTeam: georgia,
          homeRank: 6,
          homeScore: '',
          final: false
        },
        game4: {
          gameTime: 'TBD',
          awayTeam: florida,
          awayRank: 11,
          awayScore: '',
          homeTeam: floridaState,
          homeRank: 0,
          homeScore: '',
          final: false
        },
        game5: {
          gameTime: 'TBD',
          awayTeam: kentucky,
          awayRank: 9,
          awayScore: '',
          homeTeam: louisville,
          homeRank: 0,
          homeScore: '',
          final: false
        },
        game6: {
          gameTime: 'TBD',
          awayTeam: tennessee,
          awayRank: 0,
          awayScore: '',
          homeTeam: vanderbilt,
          homeRank: 0,
          homeScore: '',
          final: false
        }
      }
    }
  },
  championship: {
    days: 1,
    day0: {
      date: 'Saturday, December 1, 2018',
      games: {
        game0: {
          gameTime: '4:00 PM ET',
          awayTeam: 'TBD',
          awayRank: 0,
          awayScore: '',
          homeTeam: 'TBD',
          homeRank: 0,
          homeScore: '',
          final: false
        }
      }
    }
  },
  bowls: {

  }
}

//create the gameDate and appropriate # of games for number of days in schedule.{weekSelector.value.toLowerCase()}.days before appending to the gameContainer
//then append the gameContainer to the scoreboard
function createGameContainer() {
  let value = weekSelector.value.toLowerCase().split(' ').join('');

  for (let i = 0; i < schedule[value]['days']; i++) {
    //create the container and give it the appropriate class
    let gameContainer = document.createElement('div');
    gameContainer.setAttribute('class', 'gameContainer');

    //create the gameDate and append to the gameContainer
    let gameDate = document.createElement('p');
    gameDate.setAttribute('class', 'gameDate');
    gameDate.textContent = schedule[value][`day${i}`]['date'];
    gameContainer.appendChild(gameDate);

    //create the games based on number of games in the selected week
    for (let j = 0; j < Object.keys(schedule[value][`day${i}`]['games']).length; j++) {
      //creating the game div
      let gameDiv = document.createElement('div');
      gameDiv.setAttribute('class', 'game');

      //creating the table within the gameDiv
      let gameTable = document.createElement('table');

      //creating the table head with contents
      let gameTableHead = document.createElement('thead');

      let gameTableHeadRow = document.createElement('tr');

      let gameTableGameTime = document.createElement('th');
      gameTableGameTime.setAttribute('class', 'gameTime');
      gameTableGameTime.setAttribute('colspan', '3');
      gameTableHeadRow.appendChild(gameTableGameTime);

      let gameTableGameResult = document.createElement('th');
      gameTableGameResult.setAttribute('class', 'gameResult');
      gameTableHeadRow.appendChild(gameTableGameResult);

      gameTableHead.appendChild(gameTableHeadRow);

      //creating the table body with contents
      let gameTableBody = document.createElement('tbody');

      let gameTableAwayTeamRow = document.createElement('tr'); //away team row
      gameTableAwayTeamRow.setAttribute('class', 'awayTeamRow');
      let gameTableAwayTeamLogo = document.createElement('td'); //logo td
      gameTableAwayTeamLogo.setAttribute('class', 'awayTeamLogo');
      let gameTableAwayTeamRank = document.createElement('td'); //rank td
      gameTableAwayTeamRank.setAttribute('class', 'awayTeamRank');
      let gameTableAwayTeamName = document.createElement('td'); //name td
      gameTableAwayTeamName.setAttribute('class', 'awayTeamName');
      let gameTableAwayTeamScore = document.createElement('td'); //score td
      gameTableAwayTeamScore.setAttribute('class', 'awayTeamScore');
      gameTableAwayTeamRow.appendChild(gameTableAwayTeamLogo);
      gameTableAwayTeamRow.appendChild(gameTableAwayTeamRank);
      gameTableAwayTeamRow.appendChild(gameTableAwayTeamName);
      gameTableAwayTeamRow.appendChild(gameTableAwayTeamScore);
      gameTableBody.appendChild(gameTableAwayTeamRow);

      let gameTableHomeTeamRow = document.createElement('tr'); //home team row
      gameTableHomeTeamRow.setAttribute('class', 'homeTeamRow');
      let gameTableHomeTeamLogo = document.createElement('td'); //logo td
      gameTableHomeTeamLogo.setAttribute('class', 'homeTeamLogo');
      let gameTableHomeTeamRank = document.createElement('td'); //rank td
      gameTableHomeTeamRank.setAttribute('class', 'homeTeamRank');
      let gameTableHomeTeamName = document.createElement('td'); //name td
      gameTableHomeTeamName.setAttribute('class', 'homeTeamName');
      let gameTableHomeTeamScore = document.createElement('td'); //score td
      gameTableHomeTeamScore.setAttribute('class', 'homeTeamScore');
      gameTableHomeTeamRow.appendChild(gameTableHomeTeamLogo);
      gameTableHomeTeamRow.appendChild(gameTableHomeTeamRank);
      gameTableHomeTeamRow.appendChild(gameTableHomeTeamName);
      gameTableHomeTeamRow.appendChild(gameTableHomeTeamScore);
      gameTableBody.appendChild(gameTableHomeTeamRow);

      //append the head and body to the table and the table to the gameDiv

      gameTable.appendChild(gameTableHead);
      gameTable.appendChild(gameTableBody);
      gameDiv.appendChild(gameTable);
      gameContainer.appendChild(gameDiv);
    }
    scoreboard.appendChild(gameContainer);
  }
}

//remove existing gameContainer to prevent duplicates. only called during weekSelector change event
function clearGameContainers() {
  scoreboard.innerHTML = '';
  scoreboard.appendChild(scoreboardH1);
  scoreboard.appendChild(weekSelector);
}

function createGameContent() {
  let value = weekSelector.value.toLowerCase().split(' ').join('');
  //value to maintain the the gameTime, gameResult, and home/away team content values while enumerating through the days and games
  //e.g. on day3, game3, the gameTime, gameResult, and home/away team content values may be 7, or could be 15.  this will ensure the right content will go into the right th/td as the number of days/games remains
  //luid based on the schedule
  let x = 0;

  for (let i = 0; i < schedule[value]['days']; i++) {
    for (let j = 0; j < Object.keys(schedule[value][`day${i}`]['games']).length; j++, x++) {

      //set game status based on final boolean
      schedule[value][`day${i}`]['games'][`game${j}`]['final'] ? gameResults[x].textContent = 'FINAL' : gameTimes[x].textContent = schedule[value][`day${i}`]['games'][`game${j}`]['gameTime'];
      //set gameTableAwayTeamRow content
      let awayTeamImg = document.createElement('img');
      awayTeamImg.src = `images/${schedule[value][`day${i}`]['games'][`game${j}`][`awayTeam`]['imgUrl']}.png`;
      if (value !== 'championship') awayTeamLogos[x].appendChild(awayTeamImg);
      //set awayTeam ranking based on Team object
      schedule[value][`day${i}`]['games'][`game${j}`][`awayRank`] < 1 ? awayTeamRanks[x].textContent = '' : awayTeamRanks[x].textContent = schedule[value][`day${i}`]['games'][`game${j}`][`awayRank`];
      //set awayTeam name based on Team object
      value !== 'championship' ? awayTeamNames[x].textContent = `${schedule[value][`day${i}`]['games'][`game${j}`][`awayTeam`]['commonName']} ${schedule[value][`day${i}`]['games'][`game${j}`][`awayTeam`]['mascot']}` : awayTeamLogos[x].textContent = schedule[value][`day${i}`]['games'][`game${j}`][`awayTeam`];
      //set awayTeam name based on game object
      awayTeamScores[x].textContent = schedule[value][`day${i}`]['games'][`game${j}`][`awayScore`];
      //set gameTableHomeTeamRow content
      let homeTeamImg = document.createElement('img');
      homeTeamImg.src = `images/${schedule[value][`day${i}`]['games'][`game${j}`][`homeTeam`]['imgUrl']}.png`;
      if (value !== 'championship') homeTeamLogos[x].appendChild(homeTeamImg);
      //set homeTeam ranking based on Team object
      schedule[value][`day${i}`]['games'][`game${j}`][`homeRank`] < 1 ? homeTeamRanks[x].textContent = '' : homeTeamRanks[x].textContent = schedule[value][`day${i}`]['games'][`game${j}`][`homeRank`];
      //set homeTeam name based on Team object
      value !== 'championship' ? homeTeamNames[x].textContent = `${schedule[value][`day${i}`]['games'][`game${j}`][`homeTeam`]['commonName']} ${schedule[value][`day${i}`]['games'][`game${j}`][`homeTeam`]['mascot']}` : homeTeamLogos[x].textContent = schedule[value][`day${i}`]['games'][`game${j}`][`homeTeam`];
      //set homeTeam name based on game object
      homeTeamScores[x].textContent = schedule[value][`day${i}`]['games'][`game${j}`][`homeScore`];
    }
  }
}

function setLoserColor() {
  //change losing teams score to bold and #999
  for (let i = 0; i < games.length; i++) {
    if (awayTeamScores[i].textContent !== '' && homeTeamScores[i].textContent !== '') {
      Number(awayTeamScores[i].textContent) < Number(homeTeamScores[i].textContent) ? awayTeamRows[i].style.color = '#999': homeTeamRows[i].style.color = '#999';
    }
  }
}

//declaring standings letiables
let standings = document.querySelector('.standings');
let firstColumnData = document.querySelectorAll('.firstColumn');
let secondColumnData = document.querySelectorAll('.secondColumn');
let thirdColumnData = document.querySelectorAll('.thirdColumn');
let fourthColumnData = document.querySelectorAll('.fourthColumn');

//creating the SEC East and West team arrays for filling the standings table
let secEastTeams = [ florida, georgia, kentucky, missouri, southCarolina, tennessee, vanderbilt ];
let secWestTeams = [ alabama, arkansas, auburn, lsu, mississippi, mississippiState, texasAm ];

//function to dynamically fill the standings table
function fillStandingsTable() {

  //compare function to sort by conference record
  function compareFn(a, b) {
    if (a.confWins > b.confWins && a.confLosses < b.confLosses) return -1;
    if (a.confWins < b.confWins && (a.confLosses > b.confLosses || a.confLosses === b.confLosses)) return 1;
    if (a.confWins === b.confWins && a.confLosses > b.confLosses) return 1;
    return 0;
  }

  //sorting the SEC East team array
  secEastTeams.sort(compareFn);

  for (let i = 0; i < secEastTeams.length; i++) {
    //clear existing contents
    firstColumnData[i].innerHTML = '';
    secondColumnData[i].innerHTML = '';
    thirdColumnData[i].innerHTML = '';
    fourthColumnData[i].innerHTML = '';

    //create and append the img tag for each td
    let img = document.createElement('img');
    img.src = `images/${secEastTeams[i].imgUrl}.png`;
    img.alt = secEastTeams[i].commonName;
    firstColumnData[i].appendChild(img);

    //fill the 2nd, 3rd and 4th columns with the appropriate confernece/overall records
    secondColumnData[i].textContent = secEastTeams[i].commonName;
    thirdColumnData[i].textContent = `${secEastTeams[i].confWins}-${secEastTeams[i].confLosses}`;
    fourthColumnData[i].textContent = `${secEastTeams[i].ovrWins}-${secEastTeams[i].ovrLosses}`;
  }

  //sorting the SEC West team array
  secWestTeams.sort(compareFn);

  for (let i = 0, x = 7; i < secWestTeams.length; i++, x++) {
    //clear existing contents
    firstColumnData[x].innerHTML = '';
    secondColumnData[x].innerHTML = '';
    thirdColumnData[x].innerHTML = '';
    fourthColumnData[x].innerHTML = '';

    //create and append the img tag for each td
    let img = document.createElement('img');
    img.src = `images/${secWestTeams[i].imgUrl}.png`;
    img.alt = secWestTeams[i].commonName;
    firstColumnData[x].appendChild(img);

    //fill the 2nd, 3rd and 4th columns with the appropriate content
    secondColumnData[x].textContent = secWestTeams[i].commonName;
    thirdColumnData[x].textContent = `${secWestTeams[i].confWins}-${secWestTeams[i].confLosses}`;
    fourthColumnData[x].textContent = `${secWestTeams[i].ovrWins}-${secWestTeams[i].ovrLosses}`;
  }
}

//setting the scoreboard and standings when page loads
createGameContainer();
createGameContent();
setLoserColor();
fillStandingsTable();

//event listener to add content to the scoreboard when the a new week selection is made
weekSelector.addEventListener('change', function() {
  clearGameContainers();
  createGameContainer();
  createGameContent();
  setLoserColor();
});
