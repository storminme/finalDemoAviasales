import React from "react";
import {LineWithArrow} from "./Ticket"

export const TicketSkeleton = () => {
    return (
        <div className="flex min-w-72 md:w-[512px] max-w-[512px] h-[146px] md:max-h-[120px] flex-col-reverse md:flex-row items-center border rounded-lg shadow-md p-1 bg-white mb-4 animate-pulse">
            <div className="md:w-[30%] w-[80%] flex md:flex-col flex-row justify-between items-center md:space-y-4 md:border-r md:border-t-0 border-t p-1">
                <div className="md:w-[90%] w-[40%] h-[30px] md:h-[41px] bg-gray-200 rounded-lg"></div>
                <div className="md:min-w-[90%] w-[40%] h-[30px] md:h-[44px] bg-gray-200 rounded-lg md:mt-2"></div>
            </div>
            <div className="flex md:w-[70%] w-[90%] flex-row justify-between text-lg font-semibold p-2">
                <div className="flex flex-col">
                    <div className="md:h-8 h-6 bg-gray-200 md:w-24 w-16 rounded-md"></div>
                    <div className="mt-2 h-4 bg-gray-200 md:w-32 w-24 rounded-md"></div>
                    <div className="mt-2 h-4 bg-gray-200 md:w-24 w-16 rounded-md"></div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="h-3 bg-gray-200 md:w-16 w-12 rounded-md mb-2"></div>
                    <LineWithArrow/>
                </div>
                <div className="flex flex-col items-end">
                    <div className="md:h-8 h-6 bg-gray-200 md:w-24 w-16 rounded-md"></div>
                    <div className="mt-2 h-4 bg-gray-200 md:w-32 w-24 rounded-md"></div>
                    <div className="mt-2 h-4 bg-gray-200 md:w-24 w-16 rounded-md"></div>
                </div>
            </div>
        </div>
    );
};