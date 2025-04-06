import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const PopularCourses = () => {
    return (
        <div className="bg-white md:w-11/12 mx-auto w-full my-40 shadow-2xl">
            {/* Header container*/}
            <div>
                <h2 className="md:text-4xl text-2xl font-semibold text-center pt-12 pb-8">
                    Popular Courses
                </h2>
                <p className="text-gray-600 text-center mx-40">We have designed our courses with the most demanding professional skills. The knowledge,  experience, and expertise gained through the program will ensure your desired job in the global market. From the list below you can enroll to any online or offline courses at any time.</p>
            </div>
            {/* Tabs container*/}
            <div className='pt-8'>
                <Tabs>
                    <TabList>
                        <Tab><h3 className='text-[14px] font-semibold'>Design & Creative</h3></Tab>
                        <Tab><h3 className='text-[14px] font-semibold'>Digital Marketing</h3></Tab>
                        <Tab><h3 className='text-[14px] font-semibold'>Web & Software</h3></Tab>
                        <Tab><h3 className='text-[14px] font-semibold'>Cybersecurity</h3></Tab>
                        <Tab><h3 className='text-[14px] font-semibold'>Social Media Marketing (SMM)</h3></Tab>
                        <Tab><h3 className='text-[14px] font-semibold'>Video editing</h3></Tab>
                        <Tab><h3 className='text-[14px] font-semibold'>Photo editing</h3></Tab>
                        <Tab><h3 className='text-[14px] font-semibold'>Artificial Intelligence</h3></Tab>
                    </TabList>

                    <TabPanel>
                        <h2>Any content 1</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default PopularCourses;