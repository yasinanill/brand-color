import React, { useState } from "react";
import Modal from 'react-modal'
import { GrClose } from 'react-icons/gr';


export default function Sidebar() {
	const toggleModal = () => {
		setModalIsOpen(!modalIsOpen);
	}


    const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <div className="w-80 min-w-80 border-r-2 h-full p-3 border-solid border-cyan-900 ">
      <aside className="">
        <div className="text-3xl m-3">
          <a>
            Brand<b>Colors</b>
          </a>
        </div>
        <div className="text-lg m-2 text-gray-300">
          The biggest collection of official brand color codes around. Curated
          by @brandcolors and friends.
        </div>
        <nav className="block m-2">
          <ul>
            <li>
             
							<a className="hover:text-blue-500 cursor-pointer" onClick={toggleModal}>About BrandColors</a>
            </li>
          </ul>
        </nav>
      </aside>
      
			<Modal isOpen={modalIsOpen}
			       onRequestClose={toggleModal}
			       className=" max-w-3xl p-10 shadow-lg rounded-lg overflow-y-scroll   "  
			       overlayClassName="about-modal-overlay">
				<button className="modal-close-btn p-2 bg-gray-200" onClick={toggleModal}>
					<GrClose />
				</button>
				<h3 className="p-2 text-xl font-bold">About BrandColors</h3>
				<p className="m-2 text-base">
					BrandColors was created by DesignBombs. The goal was to create a helpful reference for the brand color codes that are needed most often.
				</p>
				<p  className=" m-2 text-base">
					It's been featured by Smashing Magazine, CSS-Tricks, Web Design Depot, Tuts+, and over 2 million pageviews. There are now over 600 brands with 1600 colors and the collection is always growing.
				</p>
			</Modal>
    </div>
  );
}
