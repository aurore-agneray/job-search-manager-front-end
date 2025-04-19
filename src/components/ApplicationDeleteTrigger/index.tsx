import { mdiTrashCanOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { useDispatch } from "react-redux";
import { deleteOneApplication } from "../../services/applications-services";
import { erase } from "../../store/jobApplicationsSlice";
import { DeleteTriggerAppearance } from "../../enums";
import { Button } from "react-bootstrap";

type DeleteTriggerProps = {
    id: string;
    appearance?: DeleteTriggerAppearance;
};

/** ApplicationDeleteTrigger
-------------------------
@param props contains the id of the job application which will be deleted
and the wanted appearance of this component
@returns an icon which deletes the job application when it is clicked
*/
export default function ApplicationDeleteTrigger(props: DeleteTriggerProps) {
    const dispatch = useDispatch();
    const appearance = props.appearance ?? DeleteTriggerAppearance.Icon;

    const handleJobApplicationDelete = async (
        event: React.MouseEvent<HTMLSpanElement>
    ) => {
        // Allows the component to be displayed in a clickable card
        event.stopPropagation();

        try {
            // Calls the API to delete the job application
            const response = await deleteOneApplication(props.id);

            if (response.status === 200) {
                // Updates the store
                dispatch(erase(props.id));
            } else {
                alert(response.message);
            }
        } catch (error) {
            alert(error);
        }
    };

    return (
        <span onClick={(event) => handleJobApplicationDelete(event)}>
            {appearance === DeleteTriggerAppearance.Icon ? (
                <Icon
                    className="clickable"
                    path={mdiTrashCanOutline}
                    size={1}
                    color="var(--my-var-error-color)"
                />
            ) : (
                <div style={{ width: "100%", textAlign: "right" }}>
                    <Button variant="danger">Supprimer la candidature</Button>
                </div>
            )}
        </span>
    );
}
