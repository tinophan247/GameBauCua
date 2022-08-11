
const initialState = {
    ListBet: [
        { id: 'nai', image: './img/GameBauCua/nai.png', betPoint: 0 },
        { id: 'bau', image: './img/GameBauCua/bau.png', betPoint: 0 },
        { id: 'ga', image: './img/GameBauCua/ga.png', betPoint: 0 },
        { id: 'ca', image: './img/GameBauCua/ca.png', betPoint: 0 },
        { id: 'cua', image: './img/GameBauCua/cua.png', betPoint: 0 },
        { id: 'tom', image: './img/GameBauCua/tom.png', betPoint: 0 },
    ],
    totalScore: 1000,
    diceArray: [
        { id: 'ga', image: './img/GameBauCua/ga.png', betPoint: 0 },
        { id: 'cua', image: './img/GameBauCua/cua.png', betPoint: 0 },
        { id: 'ca', image: './img/GameBauCua/ca.png', betPoint: 0 },
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'DAT_CUOC_BAU_CUA': {
            const ListBetUpdate = [...state.ListBet];
            const index = ListBetUpdate.findIndex(item => item.id === action.item.id)
            if (index !== -1) {
                if (action.tangGiam) {
                    if (state.totalScore > 0) {
                        ListBetUpdate[index].betPoint += 100;
                        state.totalScore -= 100;
                    }
                }
                else {
                    if (ListBetUpdate[index].betPoint > 0) {
                        ListBetUpdate[index].betPoint -= 100;
                        state.totalScore += 100;
                    }
                }
            }
            state.ListBet = ListBetUpdate;
            return { ...state }
        }
        case 'PLAY': {
            const randomDiceArray = [];
            for (let i = 0; i < 3; i++){
                let randomNumber = Math.floor(Math.random() * 6);
                const randomDice = state.ListBet[randomNumber];
                randomDiceArray.push(randomDice);
            }
            state.diceArray = randomDiceArray;
            return { ...state}
        }

        default:
            return { ...state };
    }
}