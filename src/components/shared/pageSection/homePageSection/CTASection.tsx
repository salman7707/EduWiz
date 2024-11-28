import Image from "next/image";
import Link from "next/link";
import IMAGES from "../../../../../public/images";

const CTASection = () => {
  return (
    <section className="bg-gradient-to-r from-gradientlightblue to-gradientdarkblue py-12">
      <div className="max-w-[1176px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:gap-y-0 gap-y-6">
          <div className="lg:w-[50%] w-[95%] space-y-6">
            <h2 className="text-2xl font-bold text-gray-100">
              Single Stop Solution For School Management
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Managing any educational institute is not a piece of cake.
              Managing students, staff, timetable, exams, class test,
              attendance, fees collection, accounts, etc. It does not end here.
              Parents are always worried about their child&apos;s performance
              and they need satisfaction. They care about their child&apos;s
              academic statics. Moreover, we have seen schools using huge
              registers to mark the attendance of their students and staff. And
              we have also seen that schools manage their admission, exams data,
              class tests data, etc, manually. We know it takes a lot of time
              and is very difficult to manage.
              <br />
              <br />
              Well! It&apos;s time to put check on these worries. eSkooly
              presents you a free online school management software to make
              conventional tasks easier. This is the one-stop solution to
              manage, track and record everything within your school or
              organization. Our free online school management software includes
              admin, staff and students panel, exams module, attendance module,
              fees collection module, salary and expense management, class tests
              management, inventory management, students and staff data record
              system, and many more. It is very easy to use and manage because
              eskooly is a free online school management software for end-users.
              If you can send an email you can use eskooly.
            </p>
            <div className="pt-5">
              <Link
                href="/signup"
                className="bg-transparent border border-gray-300 text-white px-6 py-2 rounded-lg font-bold hover:bg-gray-300 hover:text-gray-800 transition"
              >
                Get started for free
              </Link>
              <span className="ml-4 text-gray-400">Right now.</span>
            </div>
          </div>
          <div className="lg:w-[50%] w-[95%] lg:pl-24 relative space-y-4 flex flex-col items-center justify-center">
            <div className="absolute top-12 left-0">
              <Image
                className="animate-float"
                src={IMAGES.MIN3}
                alt="Floating Illustration 1"
                width={100}
                height={100}
                priority
              />
              <div className="-translate-y-8  translate-x-12">
                <Image
                  className="animate-float delay-200"
                  src={IMAGES.MIN4}
                  alt="Floating Illustration 2"
                  width={70}
                  height={70}
                  priority
                />
              </div>
              <div className="-translate-y-14">
                <Image
                  className="animate-float delay-400"
                  src={IMAGES.MIN5}
                  alt="Floating Illustration 3"
                  width={380}
                  height={200}
                  priority
                />
              </div>
            </div>

            <Image
              src={IMAGES.DESKTOP}
              alt="Main Illustration"
              width={500}
              height={300}
              className="rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
