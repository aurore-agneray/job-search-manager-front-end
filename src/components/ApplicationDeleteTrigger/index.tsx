import { mdiTrashCanOutline } from "@mdi/js";
import { Icon } from "@mdi/react";
import { useDispatch } from "react-redux";
import { deleteOneApplication } from "../../services/applications-services";
import { erase } from "../../store/jobApplicationsSlice";
import { DeleteTriggerAppearance } from "../../enums";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

/**
 * Represents the properties for the ApplicationDeleteTrigger component
 */
type ApplicationDeleteTriggerProps = {
    /** ID of the job application that will be deleted */
    id: string;
    /** Indicates if the trigger is an icon or a button */
    appearance?: DeleteTriggerAppearance;
};

/** ApplicationDeleteTrigger
-------------------------
@param props contains the id of the job application which will be deleted
and the wanted appearance of this component
@returns an icon which deletes the job application when it is clicked
*/
export default function ApplicationDeleteTrigger(
    props: ApplicationDeleteTriggerProps
) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
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
                /* These timeouts aim to give the user a visual feedback of his/her delete 
                action after having redirected to the list of job applications */
                setTimeout(() => {
                    // Updates the store
                    dispatch(erase(props.id));
                }, 200);

                setTimeout(() => {
                    alert("Candidature supprimée avec succès !");
                }, 400);

                navigate("/");
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
