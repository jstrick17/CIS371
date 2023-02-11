console.log("Hello World")

//Area 4
type Course = {
    courseNumber: string;
    courseName: string;
    semesterTaken: string
}
const myCourses: Array<Course> = [
    {
        courseNumber: "CIS 337",
        courseName: "Network Systems Management",
        semesterTaken: "Fall 2021"
    },
    {
        courseNumber: "CIS 338",
        courseName: "Wide Area Network Engineering",
        semesterTaken: "Fall 2022"
    },
    {
        courseNumber: "CIS 358",
        courseName: "Information Assurance",
        semesterTaken: "Winter 2022"
    },
    {
        courseNumber: "CIS 368",
        courseName: "Usability Design & Evaluation",
        semesterTaken: "Fall 2021"
    }
]
const tArea4 = document.getElementById("area4-table")
const t4 = document.createElement("table")
const row1 = document.createElement("tr")
const h1 = document.createElement("th")
const h2 = document.createElement("th")
const h3 = document.createElement("th")
const h1n = document.createTextNode("Course Number")
const h2n = document.createTextNode("Course Name")
const h3n = document.createTextNode("Semester Taken")
h1.appendChild(h1n)
h2.appendChild(h2n)
h3.appendChild(h3n)
row1.appendChild(h1)
row1.appendChild(h2)
row1.appendChild(h3)
t4.appendChild(row1)
tArea4?.appendChild(t4)
for(let index of myCourses) {
        const row = document.createElement("tr")
        const td1 = document.createElement("td")
        const td2 = document.createElement("td")
        const td3 = document.createElement("td")
        const cell1 = document.createTextNode(`${index.courseNumber}`)
        const cell2 = document.createTextNode(`${index.courseName}`)
        const cell3 = document.createTextNode(`${index.semesterTaken}`)
        td1.appendChild(cell1)
        td2.appendChild(cell2)
        td3.appendChild(cell3)
        row.appendChild(td1)
        row.appendChild(td2)
        row.appendChild(td3)
        t4.appendChild(row)
    }
tArea4?.appendChild(t4)
// End Area 4

// Area 6
type Company = {
    name: string;
    abbreviation: string;
    url: string
}
const companyList: Array<Company> = [
    {  
        name: "Internal Revenue Service",
        abbreviation: "IRS",
        url: "https://www.irs.gov/"
    },
    {  
        name: "National Aeronautics and Space Administration",
        abbreviation: "NASA",
        url: "https://www.nasa.gov/"
    },
    {  
        name: "National Rifle Association",
        abbreviation: "NRA",
        url: "https://home.nra.org/"
    },
    {  
        name: "Occupational Safety and Health Administration",
        abbreviation: "OSHA",
        url: "https://www.osha.gov/"
    },
    {  
        name: "Young Men's Christian Association",
        abbreviation: "YMCA",
        url: "https://www.ymca.org/"
    }
]
const lArea6 = document.getElementById("area6-list")
const l6 = document.createElement("ul")
const li1 = document.createElement("li")
const li2 = document.createElement("li")
const li3 = document.createElement("li")
const li4 = document.createElement("li")
const li5 = document.createElement("li")
const liLink1 = document.createElement("a")
const liLink2 = document.createElement("a")
const liLink3 = document.createElement("a")
const liLink4 = document.createElement("a")
const liLink5 = document.createElement("a")
const point1 = document.createTextNode(`${companyList[0].name}, ${companyList[0].abbreviation}, ${companyList[0].url}`)
const point2 = document.createTextNode(`${companyList[1].name}, ${companyList[1].abbreviation}, ${companyList[1].url}`)
const point3 = document.createTextNode(`${companyList[2].name}, ${companyList[2].abbreviation}, ${companyList[2].url}`)
const point4 = document.createTextNode(`${companyList[3].name}, ${companyList[3].abbreviation}, ${companyList[3].url}`)
const point5 = document.createTextNode(`${companyList[4].name}, ${companyList[4].abbreviation}, ${companyList[4].url}`)
liLink1.setAttribute('href', "https://www.irs.gov/")
liLink2.setAttribute('href', "https://www.nasa.gov/")
liLink3.setAttribute('href', "https://home.nra.org/")
liLink4.setAttribute('href', "https://www.osha.gov/")
liLink5.setAttribute('href', "https://www.ymca.org/")
liLink1.appendChild(point1)
liLink2.appendChild(point2)
liLink3.appendChild(point3)
liLink4.appendChild(point4)
liLink5.appendChild(point5)
li1.appendChild(liLink1)
li2.appendChild(liLink2)
li3.appendChild(liLink3)
li4.appendChild(liLink4)
li5.appendChild(liLink5)
l6.appendChild(li1)
l6.appendChild(li2)
l6.appendChild(li3)
l6.appendChild(li4)
l6.appendChild(li5)
lArea6?.appendChild(l6)
// End Area 6

// Area 8
type SocialMedia = {
    icon: string;
    url: string;
}
const iconList: Array<SocialMedia> = [
    {  
        icon: "/CIS371.1/twitter.png",
        url: "https://twitter.com/?lang=en"
    },
    {  
        icon: "/CIS371.1/instagram.jfif",
        url: "https://www.instagram.com/"
    },
    {  
        icon: "/CIS371.1/tiktok.png",
        url: "https://www.tiktok.com/"
    },
    {  
        icon: "/CIS371.1/pinterest.png",
        url: "https://www.pinterest.com/"
    },
    {  
        icon: "/CIS371.1/facebook.png",
        url: "https://www.facebook.com/"
    }
]
const iArea8 = document.getElementById("area8-icons")
const twitLink = document.createElement("a")
const instaLink = document.createElement("a")
const pintLink = document.createElement("a")
const faceLink = document.createElement("a")
const tokLink = document.createElement("a")
const twitPic = document.createElement("img")
const instaPic = document.createElement("img")
const pintPic = document.createElement("img")
const facePic = document.createElement("img")
const tokPic = document.createElement("img")
twitLink.setAttribute('href', "https://twitter.com/?lang=en")
instaLink.setAttribute('href', "https://www.instagram.com/")
tokLink.setAttribute('href', "https://www.tiktok.com/")
pintLink.setAttribute('href', "https://www.pinterest.com/")
faceLink.setAttribute('href', "https://www.facebook.com/")
twitPic.setAttribute('src', "/CIS371.1/twitter.png")
instaPic.setAttribute('src', "/CIS371.1/instagram.jfif")
tokPic.setAttribute('src', "/CIS371.1/tiktok.png")
pintPic.setAttribute('src', "/CIS371.1/pinterest.png")
facePic.setAttribute('src', "/CIS371.1/facebook.png")
twitPic.appendChild(twitLink)
instaPic.appendChild(instaLink)
tokPic.appendChild(tokLink)
pintPic.appendChild(pintLink)
facePic.appendChild(faceLink)
iArea8?.appendChild(twitPic)
iArea8?.appendChild(instaPic)
iArea8?.appendChild(tokPic)
iArea8?.appendChild(pintPic)
iArea8?.appendChild(facePic)
// End Area 8