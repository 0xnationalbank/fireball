import { CircularProgress } from "@mui/material";
import { infoStyles } from "../../styles";

export default function AutopetInfoCard({name, count}) {
    const classes = infoStyles();

    return (
        <div className={classes.autopetInfoCard}>
            <span className={classes.autopetCardName}>{name}</span>
            
            <span className={classes.autopetCardCount}>
                {count ? count : <CircularProgress color='inherit' />}
            </span>
        </div>
    )
}