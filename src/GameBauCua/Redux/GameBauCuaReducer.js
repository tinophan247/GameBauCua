
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

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {
        case 'BET': {
            const ListBetUpdate = [...state.ListBet];
            const index = ListBetUpdate.findIndex(dice => dice.id === action.item.id)
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
            for (let i = 0; i < 3; i++) {
                // Tạo ra số ngẫu nhiên tù 1->6
                let randomNumber = Math.floor(Math.random() * 6);
                const randomDice = state.ListBet[randomNumber];
                randomDiceArray.push(randomDice);
            }
            //Cập nhật lại mảng xúc xắc
            state.diceArray = randomDiceArray;
            //Xử lý điểm thưởng
            randomDiceArray.forEach((item, index) => {
                let indexListBet = state.ListBet.findIndex(dice => dice.id === item.id);
                if (index !== -1) {
                    state.totalScore += state.ListBet[indexListBet].betPoint;
                }
            })
            //Xử lý hoàn tiền
            state.ListBet.forEach((dice,index)=>{
                let indexRandomDice = randomDiceArray.findIndex(xxnn => xxnn.id === dice.id);
                if (indexRandomDice !== -1) {
                    state.totalScore += dice.betPoint;
                }
            })
            // Xử lý làm mới
            state.ListBet = state.ListBet.map((dice,index)=>{
                return {...dice,betPoint :0}
            })
            return { ...state }
        }
        case 'REPLAY':{
            state.totalScore = 1000;
            state.ListBet = state.ListBet.map((item,index)=>{
                return {...item,betPoint :0}
            })
            return {...state}
        }

        default:
            return { ...state };
    }
}