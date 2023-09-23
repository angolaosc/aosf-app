"use client";
import Image from "next/image";
import { Wrapper } from "./style";
import { calendar, location } from "@/assets";

export function Calendar() {
  return (
    <Wrapper
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.7 }}
    >
      <div className="calendar">
        <Image src={calendar} alt="calendar" />
        <div className="date">
          <span>06 a 27 de Outubro | 2023</span>
          <strong>4 eventos em Outubro</strong>
        </div>
      </div>

      <div className="location">
        <Image src={location} alt="location" />
        <div className="adress">
          <span>Online</span>
          <span>Luanda, Luanda Angola</span>
        </div>
      </div>
    </Wrapper>
  );
}
