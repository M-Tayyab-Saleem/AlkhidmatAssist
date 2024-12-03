import React from "react";
import CardImg1 from "../../assets/CardImg1.png";
import CardImg2 from "../../assets/CardImg2.png";
import CardImg3 from "../../assets/CardImg3.png";

const CardData = [
  {
    img: CardImg1,
    title:
      "Project Selection Process: Identifying Needs and Mobilizing Resources",
    decsription:
      "We prioritize projects based on community feedback and urgent requirements",
  },
  {
    img: CardImg2,
    title: "Executing Projects: From Planning to Community Impact And Help",
    decsription:
      "Our dedicated team ensures  project is completed with excellence.",
  },
  {
    img: CardImg3,
    title: "Join Us in Making a Difference in Your Community to help others",
    decsription: "Together, we can create lasting change and improve lives.",
  },
];

const HomeCards = () => {
  return (
    <div>
      <div className="px-4 md:px-20 pt-24 ">
        <div className="flex flex-col justify-center items-center gap-9 md:gap-8 md:flex-row md:justify-between md:items-center">
          <div className="font-bold text-xl md:text-2xl xl:text-3xl">
            Discover How AlkhidmatAssist Transforms Communities Through
            Dedicated Service Projects
          </div>
          <div className="text-base md:text-xl pb-9">
            At AlkhidmatAssist, we operate with a clear mission: to enhance
            community well-being through impactful public services. Our project
            selection process involves identifying the most pressing needs
            within communities, ensuring that our efforts are both relevant and
            effective. Once a project is selected, we mobilize volunteers and
            resources to execute it efficiently.
          </div>
        </div>
      </div>




      <div className="pt-28 md:px-8 w-full">
        <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
          {CardData.map((Card) => {
            return (
              <div key={Card.title} className="px-10 sm:px-5 md:px-2 md:w-1/2 flex flex-col sm:flex-row gap-4 md:flex-col justify-start items-center p-3">
                <img src={Card.img} alt={Card.title} className="w-full sm:w-1/2 md:w-full"/>
                <div className="flex flex-col justify-center items-center sm:px-16 md:px-0 pb-4 md:py-6 md:justify-normal md:items-start gap-3">
                <div className="font-bold text-xl">{Card.title}</div>
                <div className="">{Card.decsription}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeCards;
