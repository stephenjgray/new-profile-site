import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => {
  return {
    heading: {
      fontSize: theme.typography.pxToRem(16),
      fontWeight: "bold",
      marginRight: "1rem"
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(14),
      color: theme.palette.text.secondary,
      textTransform: "uppercase",
      lineHeight: "1.75"
    },
    date: {
      fontWeight: "bold"
    },
    grade: {
      fontSize: theme.typography.pxToRem(14),
      color: theme.palette.text.secondary,
      textTransform: "uppercase"
    }
  };
});

const ExpansionPanel = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0
    },
    "&:before": {
      display: "none"
    },
    "&$expanded": {
      margin: "auto"
    }
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles(theme => ({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    padding: theme.spacing(0, 2),
    "&$expanded": {
      minHeight: 56
    }
  },
  content: {
    "&$expanded": {
      margin: "12px 0"
    }
  }
}))(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    display: "block"
  }
}))(MuiExpansionPanelDetails);

const Education = props => {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState("panel0");

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <section className="education" name="education">
      <div className={props.root}>
        <Typography
          variant={"h3"}
          component={"h2"}
          gutterBottom
        >
          Education
        </Typography>
        {props.education.map((value, index) => (
          <ExpansionPanel
            square
            expanded={expanded === `panel${index}`}
            key={index}
            onChange={handleChange(`panel${index}`)}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}a-content`}
              id={`panel${index}a-header`}
            >
              <Typography className={classes.heading}>
                {value.course}
              </Typography>
              <Typography className={classes.secondaryHeading}>
                {value.establishment}
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className={classes.date}>{value.dates}</Typography>
              <Typography className={classes.grade}>{value.grade}</Typography>
              {value.description.map((desc, index) => (
                <Typography key={`desc-${index}`}>{desc}</Typography>
              ))}
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))}
      </div>
    </section>
  );
};

export default Education;
