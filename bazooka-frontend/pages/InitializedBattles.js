import { useEffect, useState, Fragment } from "react";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon, HandIcon } from '@heroicons/react/outline'
import ABI from '../utils/abi.json'

export default function InitializedBattles() {
    const [open, setOpen] = useState(false)
    const { Moralis } = useMoralis();
    const contractProcessor = useWeb3ExecuteFunction();
    const [battles, setBattles] = useState([]);

    useEffect(()=>{
        let battleNum;
        async function getBattleData() {
            const options = {
                contractAddress: "0x0F6d227e58314Af97a11a29fACb7B96bFE3d0602",
                functionName: "getBattleAmount",
                abi: ABI,
            }
    
            const data = await Moralis.executeFunction(options)
            battleNum = parseInt(data);
        }

        async function getAllBattles(){
            const options = {
                contractAddress: "0x0F6d227e58314Af97a11a29fACb7B96bFE3d0602",
                functionName: "getBattleData",
                abi: ABI,
            }
            
            for(let i=1; i<=2; i++){
                console.log(i)
                const data = await contractProcessor.fetch({params: {...options, params:{battleId:`${i}`}}})
                setBattles(prev=>[...prev,data]);
            }
        }


        getBattleData();
        getAllBattles();

    },[])

    function getBattles(battle){
        const options = {
            contractAddress: "0x0F6d227e58314Af97a11a29fACb7B96bFE3d0602",
            functionName: "finalizeBattle",
            abi: ABI,
            params: {
                battleId: battle._id,
                _candidate2: '',
                image: '',
                name: '',
            }
        }
    }

    return(
        <>
        <div className="flex flex-col items-center justify-center mt-[5rem] gap-5">
            <button onClick={getBattles}>Click</button>
            <ul className="w-[100%] md:w-[80%] lg:w-[60%] xl:w-[60%] m-auto flex gap-5 flex-wrap">
                {battles.map(battle=>{
                    if(battle.finalized) return;
                    return <li className="w-[30%] h-[300px]  border border-black rounded flex flex-col justify-between cursor-pointer">
                        <img src={battle[0][1]} className="min-h-[210px] max-h-[210px] min-w-[256px] " />
                        <p>Amount: {parseInt(battle.amount)}</p>
                        <button className="border border-white bg-black text-white h-[18%]" onClick={()=>setOpen(prev=>true)}>Battle</button>
                    </li>
                })}
            </ul>
        </div>
        <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={setOpen}>
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>

                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <div className="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                                <div className='flex flex-col justify-center items-center justify-center w-full text-black'>
                                    <h1 className='text-black'>Enter Product Details</h1>
                                    
                                    <div className='ml-4 flex justify-center w-full'>
                                        <button
                                            type="button"
                                            className="inline-flex w-[6vw] md:w-[8vw] h-[41px] mr-4 mt-6 items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            // onClick={handleOrderShipping}
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}