
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { themeJson } from "./theme";
import "./index.css";
import { json } from "./json";

function Mayor() {
  const survey:any = new Model(json);
  survey.applyTheme(themeJson);
  survey.onComplete.add((sender:any, _options:any) => {
    console.log(JSON.stringify(sender.data, null, 3));
  });
  
  return (
    <div className=" bg-[#1b1b1b] w-screen h-screen">
      <Survey model={survey} />
    </div>
    );
}

export default Mayor;