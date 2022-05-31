const router = require("express").Router();
const { requireAuth } = require("../middleware/auth");
const placementCompany = require("../model/placementCompany");

const { json } = require("body-parser");

// to show all the company
router.get("/placement/all_companies", (req, res) => {
  placementCompany.find({}, (err, newCompany) => {
    if (err) {
      console.log(err);
    } else {
      res.header("Access-Control-Allow-Origin", "*");
      res.json(newCompany);
      
    }
  });
});



router.get("/placement/:company_name", (req, res) => {

  const company= placementCompany.findOne({company_name:req.params.company_name}, (err, company) => {
    if (err) {
      console.log(err);
    } else {
     
      res.json(company);
    }
  });



 
});


router.post("/placement/add_company", async (req, res) => {
  const { company_name, selected_students, test_series, step3, technical_round, HR_round, projects, PORs, step1, step2, year, logo, eligible_branch, CGPA, takeaways } = req.body;
  const newCompany = new placementCompany({
   company_name: company_name,
    selected_students: selected_students,
    year: year,
    logo: logo,
    eligible_branch: eligible_branch,
    CGPA: CGPA,
    takeaways: takeaways,
    test_series: test_series,
    selection_process: {
      step1: step1,
      step2: step2,
      step3: step3
    },
    interview_round: {
      technical_round: technical_round,
      HR_round: HR_round
    },
    influence_of: {
      projects: projects,
      PORs: PORs
    },
  });
  await newCompany.save();
  res.send(newCompany);
});

//update a details of a company
router.put("/placement/update/:id", (req, res) => {
  placementCompany
    .findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        selected_students: req.body.selected_students,
        description: req.body.description,
        year: req.body.year,
      },
      { new: true }
    )
    .then((company) => {
      if (!company) {
        return res.status(404).send({
          message: "Company not found with id " + req.params.id,
        });
      } else {
        res.send(company);
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

// to delete a company for internship
router.delete("/placement/delete/:id", (req, res) => {
  placementCompany
    .findByIdAndRemove(req.params.id)
    .then((company) => {
      if (!company) {
        res.status(404).send({
          message: "Note not found with id " + req.params.id,
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});



module.exports = router;
