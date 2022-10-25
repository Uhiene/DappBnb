import {useEffect} from "react";
import { FaEthereum, FaStar } from "react-icons/fa";
import { FiCalendar, FiHeart } from "react-icons/fi";
import { BsBoxArrowUp } from "react-icons/bs";
import { BiBookOpen, BiMedal } from "react-icons/bi";
import { useGlobalState } from "../store";
import Identicon from "react-identicons";
import { useParams } from "react-router-dom";
import { loadAppartment } from "../Blockchain.services";

const Room = () => {
  const {id} = useParams()
  const [comments] = useGlobalState("comments");
  const [appartment] = useGlobalState("appartment");

  useEffect(async() => {
    await loadAppartment(id)
  },[])
  return (
    <div className="py-8 px-10 sm:px-20 md:px-32">
      <RoomHeader name={appartment?.name} />
      <RoomGrid images={appartment?.images.split(",")} />
      <RoomDeescription
        description={appartment?.description}
        rooms={appartment?.rooms}
        price={appartment?.pricea}
      />
      <RoomReviews />
      <div className="flex justify-between flex-wrap">
        {comments.map((comment, i) => (
          <RoomComments key={i} comment={comment} />
        ))}
      </div>
    </div>
  );
};

const RoomHeader = ({name}) => {
  return (
    <div>
      <h1 className="text-3xl font-semibold"> {name}</h1>
      <div className="flex justify-between">
        <div className="flex items-center mt-2 space-x-2 text-xl font-lg">
          <div className="flex items-center space-x-2">
            <p>
              <FaStar />
            </p>
            <p>5.0</p>
          </div>
          <span className="underline">.6 reviews</span>
        </div>
        <div className="underline text-xl flex items-center space-x-4">
          <p className="flex items-center">
            <FiHeart />
            save
          </p>
          <p className="flex items-center">
            <BsBoxArrowUp />
            share
          </p>
        </div>
      </div>
    </div>
  );
};

const RoomGrid = ({first, second, third, forth, fifth}) => {
  console.log(images.length)
  return (
    <div className="mt-8 flex rounded-2xl overflow-hidden">
      <div className="md:w-1/2 w-full">
        <img
          src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-25477982/original/7a12acd5-5d9d-4c35-b8f8-d7b9cfb98c63.jpeg"
          alt=""
          className="h-full"
        />
      </div>
      <div className="w-1/2 md:flex hidden flex-wrap">
        <img
          src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-25477982/original/7a12acd5-5d9d-4c35-b8f8-d7b9cfb98c63.jpeg"
          alt=""
          className="w-1/2 h-64 pl-2 pb-1 pr-1"
        />
        <img
          src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-25477982/original/03c91122-4966-4df2-a143-b32219eb7b6f.jpeg"
          alt=""
          className="w-1/2 h-64 pl-1 pb-1"
        />
        <img
          src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-25477982/original/504844a4-177f-41da-9534-125b18207cac.jpeg"
          alt=""
          className="w-1/2 h-64 pt-1 pl-2 pr-1"
        />
        <img
          src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-25477982/original/f6906169-9f84-4790-9cd0-afc229fe5275.jpeg"
          alt=""
          className="sm:w-2/5 md:w-1/2 h-64 pl-1 pt-1"
        />
      </div>
    </div>
  );
};

const RoomDeescription = ({description, rooms, price}) => {
  return (
    <>
      <div className="py-10 border-b-2 border-b-slate-200 w-3/4">
        <div className="flex space-x-4 text-xl mt-2">
          <p>{rooms} rooms</p>
          <p className="flex items-center">
            <FaEthereum />
            {price} eth
          </p>
        </div>
      </div>
      <div className="py-10 border-b-2 border-b-slate-200 space-y-4">
        <div className=" flex space-x-4 ">
          <div>
            <p className="text-slate-500 text-lg">
              {description}
            </p>
          </div>
        </div>
        <div className=" flex space-x-4 ">
          <BiBookOpen className="text-4xl" />
          <div>
            <h1 className="text-xl font-semibold">Featured in</h1>
            <p>Condé Nast Traveler, June 2021</p>
          </div>
        </div>
        <div className=" flex space-x-4">
          <BiMedal className="text-4xl" />
          <div>
            <h1 className="text-xl font-semibold">
              Vittorio Emanuele is a Superhost
            </h1>
            <p>
              Superhosts are experienced, highly rated hosts who are committed
              to providing great stays for guests.
            </p>
          </div>
        </div>
        <div className=" flex space-x-4">
          <FiCalendar className="text-4xl" />
          <div>
            <h1 className="text-xl font-semibold">
              Free cancellation before Oct 17.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

const RoomReviews = () => {
  return (
    <>
      <div className="pt-10 flex items-center space-x-2 text-2xl font-semibold">
        <h4>5.0 · 47 reviews </h4>
        <FaStar />
      </div>
    </>
  );
};

const RoomComments = ({ comment }) => {
  return (
    <div className="w-1/2 pr-5 space-y-5">
      <div className="pt-10 flex items-center space-x-5">
        <Identicon
          string={comment.name}
          size={30}
          className="rounded-full shadow-black shadow-sm"
        />
        <div>
          <p className="text-xl font-semibold">{comment.name} </p>
          <p className="text-slate-500 text-lg">{comment.date}</p>
        </div>
      </div>
      <p className="text-xl">{comment.text}</p>
    </div>
  );
};

export default Room;
