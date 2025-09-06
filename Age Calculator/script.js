let day_btn = document.querySelector("#day")
let month_btn = document.querySelector("#month")
let year_btn = document.querySelector("#year")
let calculate_age = document.querySelector("#btn")
let show_result = document.querySelector("#show-result")

calculate_age.addEventListener("click", () => {
    const day = parseInt(day_btn.value)
    const month = parseInt(month_btn.value)
    const year = parseInt(year_btn.value)

    if (!day || !month || !year) {
        alert("Enter valid date")
        return
    }

    if (day < 1 || day > 31) {
        console.log("Day must be between 1 and 31")
        return
    }
    if (month < 1 || month > 12) {
        console.log("Month must be between 1 and 12")
        return
    }

    const DOB = new Date(year, month - 1, day)
    const now = new Date()

    let Ageyear = now.getFullYear() - DOB.getFullYear()
    let AgeMonths = now.getMonth() - DOB.getMonth()
    let AgeDays = now.getDate() - DOB.getDate()

    if (AgeDays < 0) {
        AgeMonths = AgeMonths - 1
        const PrvMonthLastDay = new Date(now.getFullYear(), now.getMonth(), 0).getDate()
        AgeDays = AgeDays + PrvMonthLastDay
    }

    if (AgeMonths < 0) {
        Ageyear = Ageyear - 1
        AgeMonths = AgeMonths + 12
    }

    show_result.style.visibility = "visible"
    show_result.textContent = `Your age is : ${Ageyear} Years, ${AgeMonths} Months, ${AgeDays} Days`
    show_result.classList.add("visible")

    
})

day.addEventListener("keydown",(event)=>{
        if(event.key === "Enter"){
            calculate_age.click()
        }
    })

    month.addEventListener("keydown",(event)=>{
        if(event.key === "Enter"){
            calculate_age.click()
        }
    })

    year.addEventListener("keydown",(event)=>{
        if(event.key === "Enter"){
            calculate_age.click()
        }
    })

    
