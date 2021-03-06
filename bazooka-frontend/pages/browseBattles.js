import { useEffect, useState, useContext } from "react";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
import { storeContext } from "./_app";
import ABI from '../utils/abi.json'

export default function BrowseBattles() {
    const { battlesPaused, setBattlesPaused } = useContext(storeContext);
    const { Moralis } = useMoralis();
    const contractProcessor = useWeb3ExecuteFunction();
    const [battles, setBattles] = useState([]);

    useEffect(()=>{
        async function getBattleData() {
            const options = {
                contractAddress: process.env.contractAddress,
                functionName: "getBattleAmount",
                abi: ABI,
            }
    
            const data = await Moralis.executeFunction(options)
            const battleNumber = parseInt(data);
            return battleNumber;
        }
        async function getBattlesPaused() {
            const options = {
                contractAddress: process.env.contractAddress,
                functionName: "getBattlesPaused",
                abi: ABI,
            }

            const data = await contractProcessor.fetch({ params: { ...options } })
            setBattlesPaused(data);
        }

        async function run(){
            const battleNum = await getBattleData();
            getAllBattles(battleNum);
            getBattlesPaused();
        }

        run()

    },[])

    async function getAllBattles(battleNum){
        console.log(battleNum)
        const options = {
            contractAddress: process.env.contractAddress,
            functionName: "getBattleData",
            abi: ABI,
        }
        
        for(let i=1; i<=battleNum; i++){
            const data = await contractProcessor.fetch({params: {...options, params:{battleId:`${i}`}}})
            setBattles(prev=>[...prev,data]);
        }
    }

    function getBattles(){
        console.log(battles)
    }

    async function handleVote1(battle){
        const battleID = parseInt(battle[4])
        const options = {
            chain: 'matic testnet',
            contractAddress: process.env.contractAddress,
            functionName: "IncrementVote1",
            abi: ABI,
            params: {
                battleId: battleID,
            }
        }

        const transaction = await Moralis.executeFunction(options)
        const receipt = await transaction.wait();
        console.log('Transaction reciept: ', receipt);
    }
    
    async function handleVote2(battle){
        const battleID = parseInt(battle[4])
        const options = {
            chain: 'matic testnet',
            contractAddress: process.env.contractAddress,
            functionName: "IncrementVote2",
            abi: ABI,
            params: {
                battleId: battleID,
            }
        }

        const transaction = await Moralis.executeFunction(options)
        const receipt = await transaction.wait();
        console.log('Transaction reciept: ', receipt);
    }

    return !battlesPaused ? (
        <div className="flex flex-col items-center justify-center mt-[5rem] gap-5">
            <ul className="w-[100%] md:w-[100%] xl:w-[70%] 2xl:w-[60%] m-auto flex gap-5 flex-wrap max-h-[720px] overflow-y-auto customScrollbar">
                {battles.map(battle=>{
                    if(!battle[3]) return;
                    return <ul className="w-[90%] border border-white rounded flex justify-between px-2 bg-black bg-black bg-opacity-30 bg-clip-padding rounded-lg" style={{backdropFilter:'blur(15px)'}}>
                        <li className="w-[30%] h-[300px]  border border-white rounded flex flex-col justify-between cursor-pointer text-white">
                        <img src={battle[0][2]} className="min-h-[210px] max-h-[210px] md:min-w-[200px] " />
                        <button className="border border-white bg-red-400 text-white h-[18%]" onClick={()=>handleVote1(battle)}>Vote</button>
                        </li>
                        <h2 className="my-auto text-white">VS</h2>
                        <li className="w-[30%] h-[300px]  border border-white rounded flex flex-col justify-between cursor-pointer text-white">
                        <img src={battle[1][2]} className="min-h-[210px] max-h-[210px] md:min-w-[200px] " />
                        <button className="border border-white bg-red-400 text-white h-[18%]" onClick={()=>handleVote2(battle)}>Vote</button>
                        </li>
                    </ul>
                })}
            </ul>
        </div>
    ) : (<div className="w-full h-full flex justify-center mt-10 items-center"><p className="h-[50px] w-[30%] flex justify-center items-center text-black m-auto border-2 bg-white border-black rounded">Battles are paused currently, please visit in a while!</p></div>)
}