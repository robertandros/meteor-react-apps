import { Mongo } from 'meteor/mongo';

const Players = new Mongo.Collection('players');

export const getRankings = (players) => {
    var rank = 1;

    const playersWithRankings = players.map((player, index) => {
        if(index != 0 && players[index].score < players[index - 1].score) {
            rank++;
        }
        return {
            ...player,
            rank
        }
    });

    return playersWithRankings;
};

export default Players;
