import React, { useContext } from "react";
import Avatar from "../images/avatar.svg";
import AppContext from "../context/AppProvider";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const { lotteryWinners, applicants } = useContext(AppContext);
  const today = new Date();
  const navigate = useNavigate();

  const daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednessday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const day = today.getDay();
  return (
    <div className="p-5 space-y-10">
      {" "}
      <div className="card card-side bg-base-200 shadow-2xl px-1 py-4 sm:px-10">
        <figure>
          <img src={Avatar} alt="Movie" className="w-36" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Welcome Back Boss</h2>
          <p className="text-sm">
            It is a beautiful {daysOfTheWeek[day]} to get some workdone
          </p>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Winning Number</th>
              <th>nationality</th>
              <th>Date of birth</th>
              <th>Telephone</th>
              <th>Email</th>
              <th>Address</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {applicants.length ? (
              applicants.map((applicant, length, id) => {
                return (
                  <tr key={id}>
                    <th>{length + 1}</th>
                    <td>{applicant.fullname}</td>
                    <td>{applicant.winningNumber}</td>
                    <td>{applicant.nationality}</td>
                    <td>{applicant.birthDate}</td>
                    <td>{applicant.tel}</td>
                    <td>{applicant.email}</td>
                    <td>{applicant.address}</td>
                    <td
                      className="cursor-pointer"
                      onClick={() =>
                        navigate(
                          `/applicant/${applicant.fullname}/${applicant.winningNumber}/${applicant.nationality}/${applicant.birthDate}/${applicant.tel}/${applicant.email}/${applicant.address}/${applicant._id}`
                        )
                      }
                    >
                      <FaEdit />
                    </td>
                  </tr>
                );
              })
            ) : (
              <div>No Applicants to display</div>
            )}
          </tbody>
        </table>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Amount</th>
              <th>Country</th>
              <th>Lucky Number</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {lotteryWinners.length ? (
              lotteryWinners.map((lotteryWinner, length, id) => {
                return (
                  <tr>
                    <th>{length + 1}</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={lotteryWinner.picture.name}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        {lotteryWinner.fullname}
                      </div>
                    </td>
                    <td>
                      {Number(lotteryWinner.amountWon).toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                        minimumFractionDigits: 2,
                      })}
                    </td>
                    <td>{lotteryWinner.nationality}</td>
                    <td>{lotteryWinner.luckyNumber}</td>
                    <td
                      className="cursor-pointer"
                      onClick={() =>
                        navigate(
                          `/edit/${lotteryWinner.fullname}/${lotteryWinner.amountWon}/${lotteryWinner.nationality}/${lotteryWinner.luckyNumber}/${lotteryWinner._id}`
                        )
                      }
                    >
                      <FaEdit />
                    </td>
                  </tr>
                );
              })
            ) : (
              <div>Loading...</div>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
