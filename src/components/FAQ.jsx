import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { faqList } from "../assets/faq";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: 50,
    color: "black",
    paddingTop: 50,
    paddingBottom: 50
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: "bold",
    flexShrink: 0
  },
  link: {
    textDecorationColor: "black",
    textDecoration: "none"
  }
}));

export default function FAQ() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const halfArray = Math.floor(faqList.length / 2);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={12} md={6}>
          {faqList.slice(0, halfArray).map((faq, index) => (
            <ExpansionPanel
              expanded={expanded === "panel" + faqList.indexOf(faq)}
              onChange={handleChange("panel" + faqList.indexOf(faq))}
              key={faqList.indexOf(faq)}
            >
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography noWrap className={classes.heading}>
                  {faq.question}
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <div
                  className={classes.link}
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              </ExpansionPanelDetails>
            </ExpansionPanel>
          ))}
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          {faqList.slice(halfArray, faqList.length).map((faq, index) => (
            <ExpansionPanel
              expanded={expanded === "panel" + faqList.indexOf(faq)}
              onChange={handleChange("panel" + faqList.indexOf(faq))}
              key={faqList.indexOf(faq)}
            >
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                  {faq.question}
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <div
                  className={classes.link}
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              </ExpansionPanelDetails>
            </ExpansionPanel>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
// import Grid from "@material-ui/core/Grid";
// import ExpansionPanel from "@material-ui/core/ExpansionPanel";
// import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
// import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
// import Typography from "@material-ui/core/Typography";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import { faqList } from "../utils/faq";

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//     margin: 50,
//     color: "black"
//   },
//   paper: {
//     padding: theme.spacing(1),
//     textAlign: "center",
//     color: theme.palette.text.secondary
//   },
//   heading: {
//     fontSize: theme.typography.pxToRem(15),
//     flexShrink: 0
//   },
//   link: {
//     textDecorationColor: "black",
//     textDecoration: "none"
//   }
// }));

// export default function FAQ() {
//   const classes = useStyles();
//   const [expanded, setExpanded] = React.useState(false);
//   const halfArray = Math.floor(faqList.length / 2);

//   const handleChange = panel => (event, isExpanded) => {
//     setExpanded(isExpanded ? panel : false);
//   };

//   return (
//     <div className={classes.root}>
//       <Grid
//         container
//         direction="row"
//         justify="center"
//         alignItems="center"
//         spacing={6}
//       >
//         <Grid container item xs={12} sm={6} spacing={3}>
//           {faqList.slice(0, halfArray).map((faq, index) => (
//             <ExpansionPanel
//               expanded={expanded === "panel" + faqList.indexOf(faq)}
//               onChange={handleChange("panel" + faqList.indexOf(faq))}
//             >
//               <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
//                 <Typography className={classes.heading}>
//                   {faq.question}
//                 </Typography>
//               </ExpansionPanelSummary>
//               <ExpansionPanelDetails>
//                 <div
//                   classname={classes.link}
//                   dangerouslySetInnerHTML={{ __html: faq.answer }}
//                 />
//                 {/* {faq.answer}
//                 </div> */}
//               </ExpansionPanelDetails>
//             </ExpansionPanel>
//           ))}
//         </Grid>
//         <Grid container item xs={12} sm={6} spacing={3}>
//           {faqList.slice(halfArray, faqList.length).map((faq, index) => (
//             <ExpansionPanel
//               expanded={expanded === "panel" + faqList.indexOf(faq)}
//               onChange={handleChange("panel" + faqList.indexOf(faq))}
//             >
//               <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
//                 <Typography className={classes.heading}>
//                   {faq.question}
//                 </Typography>
//               </ExpansionPanelSummary>
//               <ExpansionPanelDetails>
//                 <div
//                   classname={classes.link}
//                   dangerouslySetInnerHTML={{ __html: faq.answer }}
//                 />
//                 {/* {faq.answer}
//                 </div> */}
//               </ExpansionPanelDetails>
//             </ExpansionPanel>
//           ))}
//         </Grid>
//       </Grid>
//     </div>
//   );
// }
