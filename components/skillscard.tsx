// components/FloatingHeader.tsx
import { motion } from "framer-motion";
import { FC } from "react";
import {Avatar, AvatarGroup, AvatarIcon} from "@nextui-org/avatar";

import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/table";

const FloatingHeader: FC = () => {
  return (
    <div
    className="lg:col-span-2 text-center mb-8"
      
    >
    
        <Table
          aria-label="Example static collection table"
          className="text-WHITE-500 border-blue-500"
        >
          <TableHeader className="bg-blue-500 text-white">
            <TableColumn className="bg-blue-900 text-white">DATE</TableColumn>
            <TableColumn className="bg-blue-900 text-white">POSITION</TableColumn>
            <TableColumn className="bg-blue-900 text-white">ENTERPRISE</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1" className="border-b">
              <TableCell>Jan 2020 - Dec 2020</TableCell>
              <TableCell>Creative Director</TableCell>
              <TableCell>Google, US</TableCell>
            </TableRow>
            <TableRow key="2" className="border-b">
              <TableCell>Jan 2021 - Dec 2021</TableCell>
              <TableCell>Creative Director</TableCell>
              <TableCell>Amazon, US</TableCell>
            </TableRow>
            <TableRow key="3" className="border-b">
              <TableCell>Jan 2022 - Jan 2023</TableCell>
              <TableCell>Creative Director</TableCell>
              <TableCell>Linkedin, UK</TableCell>
            </TableRow>
            <TableRow key="4" className="border-b">
              <TableCell>Jan 2023 - Present</TableCell>
              <TableCell>Creative Director</TableCell>
              <TableCell>pxdraft Ltd, UK</TableCell>
            </TableRow>
          </TableBody>
        </Table>
    
    </div>
  );
};

const containerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  textAlign: "center",
};

const headerStyle: React.CSSProperties = {
  fontSize: "3rem",
  fontWeight: "bold",
};

export default FloatingHeader;
