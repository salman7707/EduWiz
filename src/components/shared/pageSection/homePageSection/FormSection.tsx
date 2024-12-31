"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import IMAGES from "../../../../../public/images";
import { FaEnvelope } from "react-icons/fa";
import { FaMap } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

const ContactUs = () => {
  const [state, setState] = useState<string>("email");

  return (
    <div
      id="contact-us"
      className="section py-16 bg-gradient-to-r from-gradientlightblue to-gradientdarkblue "
    >
      <div className="max-w-[1176px] mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-white">Drop us a Line.</h2>
          <h4 className="text-lg text-gray-300 mt-2">
            Ask us a question, or just say Hello.
          </h4>
        </div>

        <div className="flex lg:flex-row flex-col items-center justify-between w-full pt-4 lg:gap-y-0 gap-y-10">
          {/* Contact Form */}
          <div className="lg:w-[55%] w-[95%] mx-auto">
            <form id="contactform" className="lg:p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <Label className="text-white text-sm">First name *</Label>
                  <Input
                    type="text"
                    id="firstName"
                    required
                    className="border-none bg-white"
                  />
                </div>
                <div>
                  <Label className="text-white text-sm">Last name *</Label>
                  <Input
                    type="text"
                    id="firstName"
                    required
                    className="border-none bg-white"
                  />
                </div>
                <div>
                  <Label className="text-white text-sm">Email *</Label>
                  <Input
                    type="text"
                    id="firstName"
                    required
                    className="border-none bg-white"
                  />
                </div>
                <div>
                  <Label className="text-white text-sm">Phone</Label>

                  <Input
                    type="text"
                    id="firstName"
                    required
                    className="border-none bg-white"
                  />
                </div>
              </div>
              <div className="mt-4">
                <Label className="text-white text-sm">Message *</Label>
                <Textarea
                  id="message"
                  rows={4}
                  className="bg-white"
                  required
                ></Textarea>
              </div>
              <div className="mt-4 text-right">
                <Button variant={"blue"} type="submit">
                  Send Message
                </Button>
              </div>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="lg:w-[40%] w-[90%] mx-auto">
            {/* Tabs */}
            <div className="mb-6">
              <ul className="flex space-x-4 text-white">
                <li
                  className={`cursor-pointer text-blue-500 ${
                    state === "email"
                      ? " border-t-2 text-gray-600 border-coolblue"
                      : "border-t-2 border-t-transparent"
                  } pt-4`}
                  onClick={() => setState("email")}
                >
                  Email
                </li>
                <li
                  className={`cursor-pointer pt-4  ${
                    state === "location"
                      ? " border-t-2 border-coolblue text-gray-600"
                      : "border-t-2 border-t-transparent"
                  } pt-4`}
                  onClick={() => setState("location")}
                >
                  Location
                </li>
                <li
                  className={`cursor-pointer pt-4 ${
                    state === "phone"
                      ? " border-t-2 border-coolblue text-gray-600"
                      : "border-t-2 border-t-transparent"
                  } pt-4`}
                  onClick={() => setState("phone")}
                >
                  Phone
                </li>
              </ul>
            </div>
            {/* Tab Content */}
            <div>
              {/* Email Tab */}
              {state === "email" ? (
                <div className="flex items-center mb-4">
                  <div className="bg-blue p-3 rounded-full text-white">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div className="ml-4">
                    <p className="text-white">Contact us by email</p>
                    <p className="text-[#039BE5] text-sm">mail@eskooly.com</p>
                  </div>
                </div>
              ) : state === "location" ? (
                <div className="flex items-center mb-4">
                  <div className="bg-blue p-3 rounded-full text-white">
                    <FaMap className="text-xl" />
                  </div>
                  <div className="ml-4">
                    <p className="text-white">Visit us @ our Office</p>
                    <p className="text-[#039BE5] text-sm">
                      1 Rowan Lodge, 1092 Chester Road Stratford, Manchester, UK
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center mb-4">
                  <div className="bg-blue p-3 rounded-full text-white">
                    <FaPhoneAlt className="text-xl" />
                  </div>
                  <div className="ml-4">
                    <p className="text-white">Call our Support team</p>
                    <p className="text-blue text-sm">
                      +92 346 020 4447, +44 740 407 4252
                    </p>
                  </div>
                </div>
              )}
            </div>
            {/* Illustration */}
            <Image
              src={IMAGES.CITY}
              alt="Illustration"
              width={500}
              height={300}
              className="mt-6 lg:w-[600px] w-full h-[300px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
