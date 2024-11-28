import { MoreFeatureCardType } from "@/types/MoreFeature";
import IMAGES from "../../public/images";

const MoreFeature: MoreFeatureCardType[] = [
    {
        icon: IMAGES.COURT,
        title: 'Institute Info',
        description:
            'You can set your all institute info like logo, name, target line, etc., which will display on every printable document and report.',
    },
    {
        icon: IMAGES.PERSONS,
        title: 'Class Management',
        description:
            'This school management software manages your classes easily, from students to subjects and courses to marks.',
    },
    {
        icon: IMAGES.PAPER,
        title: 'Exams Management',
        description:
            'eSkooly has a complete solution for exams management starting from new exams to final results, reports, and result cards.',
    },
    {
        icon: IMAGES.EMOJI,
        title: 'Attendance System',
        description:
            'Our free school software has an outstanding online attendance management system for students and staff.',
    },
    {
        icon: IMAGES.MONEY,
        title: 'Fee Management',
        description:
            'Our school software opens an account for every student to manage fees and dues. eSkooly manages everything automatically.',
    },
    {
        icon: IMAGES.FILES,
        title: 'Tests Management',
        description:
            'Managing class tests is a piece of cake with this free school management software. It keeps a record of every class test.',
    },
    {
        icon: IMAGES.WEIGHT,
        title: 'Accounts',
        description:
            'Managing income, expenses, and staff salaries is no longer difficult. Use our software for easy financial management.',
    },
    {
        icon: IMAGES.REPORT,
        title: 'Printable Reports',
        description:
            'Print all the reports and letters like admission letters, fee slips, salary slips, job letters, and result cards.',
    },
];
export default MoreFeature;