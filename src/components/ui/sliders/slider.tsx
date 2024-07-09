import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const ImageSlider = ({ images, width, height }: { images: string[], width: number, height: number }) => {
    const [page, setPage] = useState<number>(0);
    const [direction, setDirection] = useState<number>(1);

    const paginate = (newDirection: number) => {
        setPage((prevPage) => (prevPage + newDirection + images.length) % images.length);
        setDirection(newDirection);
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => Math.abs(offset) * velocity;
    return (
        <div className="relative max-w-screen-xl mx-auto">
            <motion.div
                key={page}
                custom={direction}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                style={{ width: "100%", height: "100%", position: "relative" }}
                onDragEnd={(_e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);
                    if (swipe < -swipeConfidenceThreshold) {
                        paginate(1);
                    } else if (swipe > swipeConfidenceThreshold) {
                        paginate(-1);
                    }
                }}
            >
                <Image src={images[page]} alt="" width={width} height={height} />
            </motion.div>
            <div className="absolute top-1/2 transform -translate-y-1/2 left-4 cursor-pointer" onClick={() => paginate(-1)}>
                <FontAwesomeIcon icon={faChevronLeft} className="text-3xl text-gray-700 dark:text-gray-300" />
            </div>
            <div className="absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer" onClick={() => paginate(1)}>
                <FontAwesomeIcon icon={faChevronRight} className="text-3xl text-gray-700 dark:text-gray-300" />
            </div>
        </div >
    );
};

export default ImageSlider;