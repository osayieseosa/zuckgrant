import React, { useContext } from "react";
import AppContext from "../context/AppProvider";
import AuthContext from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const LotteryWinners = () => {
  const { lotteryWinners } = useContext(AppContext);
  const { auth } = useContext(AuthContext);

  const navigate = useNavigate();
  return (
    <div className="p-5 w-full">
      <u>
        <h1 className="font-bold text-4xl text-secondary">Lottery Winners</h1>
      </u>
      <div className="w-full grid items-center justify-items-center grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 my-10 cursor-pointer">
        {auth?.length && (
          <div
            className="card w-52 bg-base-100 shadow-xl"
            onClick={() => navigate("/newWinner")}
          >
            <figure className="px-10 pt-10">
              <span className="h-36 w-full rounded-xl grid place-content-center text-3xl font-bold border-2 border-red-500">
                +
              </span>
            </figure>
            <div className="card-body">
              <h2 className="card-title text-sm">Create New</h2>
              <p className="text-xs">Nationality: unknown</p>
              <p className="text-xs">Amount Won: unknown</p>
            </div>
          </div>
        )}
        {lotteryWinners.length ? (
          lotteryWinners.map((lotteryWinner) => {
            return (
              <div className="card w-52 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <img
                    src={lotteryWinner.picture.name}
                    alt="Shoes"
                    className="rounded-xl h-36"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-sm">
                    {lotteryWinner.fullname}
                  </h2>
                  {lotteryWinner?.luckyNumber && (
                    <p className="text-xs">
                      Lucky Number:&nbsp;{lotteryWinner.luckyNumber}
                    </p>
                  )}
                  <p className="text-xs">
                    Nationality:&nbsp;{lotteryWinner.nationality}
                  </p>
                  <p className="text-xs">
                    Amount won:&nbsp;{lotteryWinner.amountWon}
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default LotteryWinners;
