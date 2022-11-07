import { Collapse } from "antd";
import { FC } from "react";
import { getSpecs } from "../../redux/features/specsList/specsListSlice";
import { useAppSelector } from "../../redux/hooks";
const { Panel } = Collapse;

const SpecsList: FC = () => {
  const specs = useAppSelector(getSpecs);

  return (
    <div className="w-5/12">
      <Collapse accordion>
        {specs.map((each) => (
          <Panel header={each.name} key={each.name}>
            {Object.entries(each).map(([fieldName, fieldValue]) => (
              <p key={fieldName}>
                <b> {fieldName}</b>: {fieldValue?.toString?.()}
              </p>
            ))}
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default SpecsList;
