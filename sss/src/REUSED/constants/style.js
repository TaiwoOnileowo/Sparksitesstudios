const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",
  paragraph:
    "inter font-medium md:leading-[40px] xs:leading-[35.8px] text-[16px] xs:text-[24px]",
  heading2:
    "roboto sm:leading-[50px] ss:leading-[45px] xs:leading-[40px] leading-[25px] md:leading-[55px] text-[22px] xs:text-[28px] ss:text-[32px] sm:text-[36px] md:text-[44px]",
  heading3:
    "inter sm:leading-[30px] ss:leading-[35px] xs:leading-[30px] leading-[25px] md:leading-[40px] text-[14px] xs:text-[16px] ss:text-[20px] sm:text-[24px] md:text-[32px]",
  button:
    "xs:py-4 py-2 ss:w-[150px] xs:w-[120px] w-[100px] sm:w-[180px] md:w-[200px] bg-[#5c0a80] roboto font-medium md:text-[18px] sm:text-[16px] xs:text-[14px] text-[14px] text-white rounded-full",
  list: "roboto font-normal cursor-pointer xs:text-[14px] text-[12px] ss:text-[16px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-center",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col ${styles.paddingY}`,

  sectionImgReverse: `flex flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 justify-center flex-col`,
};

export default styles;
