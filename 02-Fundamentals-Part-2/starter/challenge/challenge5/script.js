// Fifth Challenge

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(85, 54, 41);

function checkWinner(avgDolphins, avgKoalas){
    if(avgDolphins > avgKoalas){
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`); 
    } else if(avgKoalas > avgDolphins){
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins ...');
    }
}

checkWinner(scoreDolphins, scoreKoalas);