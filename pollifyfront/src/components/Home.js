import React, { Component } from 'react'
import '../App.css'

export default class Home extends Component 
{

    state = {
        Box1 : {
            title : "Voting",
            Description : "Voting is a fundamental right guaranteed to all citizens of India under the Indian Constitution. The provision for voting is outlined in several sections of the Constitution, primarily in Articles 326 to 329. Article 326 specifically provides for the universal adult suffrage, which means that every citizen above the age of 18 has the right to vote, regardless of their caste, religion, gender, or social status. This provision ensures that the democratic principles of equality and representation are upheld in the electoral process. Furthermore, Article 327 grants the power to Parliament to make laws relating to the conduct of elections, including the preparation of electoral rolls, delimitation of constituencies, and the appointment of election tribunals. These provisions form the cornerstone of the Indian electoral system, fostering inclusivity and ensuring that the voice of every citizen is heard through the ballot box.",
            photo : "https://hls.harvard.edu/wp-content/uploads/2022/07/HarvardLawBulletin_Su22_Page_04_Image_0001.jpg",
            alt : "Box 1 photo" 
        },

        Box2 : {
            title : "Article 326",
            Description : "Article 326 of the Indian Constitution is a pivotal provision that guarantees the right to vote to all citizens of India. It states that 'the elections to the House of the People (Lok Sabha) and to the Legislative Assembly of every State shall be on the basis of adult suffrage.' This means that every citizen who is above the age of 18 has the right to vote in elections, subject to certain exceptions and disqualifications mentioned in the Constitution or other laws.",
            Description2 : "The principle of universal adult suffrage embodied in Article 326 is a fundamental aspect of India's democracy. It ensures that all citizens, regardless of their background, enjoy equal voting rights and have an opportunity to participate in the electoral process. This provision is instrumental in promoting social inclusion, empowering marginalized communities, and ensuring the representation of diverse voices in the democratic setup.",
            Description3 : "The concept of adult suffrage signifies that the right to vote is not based on any qualifications such as property ownership, education, or gender. It firmly establishes the principle that the power to elect representatives rests with the people, irrespective of their socioeconomic status or educational background. This provision has played a crucial role in strengthening the democratic fabric of India and upholding the values of equality and justice.",
            photo : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm_AeTRlMc_nZSvk3JDmL4f_wiNvFcMos7Uw&usqp=CAU",
            alt : "Box 2 photo" 
        },

        Box3 : {
            title : "Voting Uses",
            d1 : "Voting allows citizens to actively participate in the democratic process and fulfill their civic duty. By casting their vote, individuals have the opportunity to shape the government and influence public policies according to their preferences and priorities.",
            d2 : "Voting helps ensure that diverse voices and interests are represented in the government. By electing representatives through voting, citizens can choose individuals who they believe will effectively advocate for their concerns, needs, and aspirations.",
            d3 : "Voting plays a crucial role in safeguarding individual rights and liberties. Elected representatives have the power to create, amend, and repeal laws that impact citizens' lives. By participating in the electoral process, citizens can elect officials who will protect and promote their fundamental rights and freedoms.",
            d4 : "Voting holds elected officials accountable for their actions and decisions. By regularly participating in elections, citizens can evaluate the performance of their representatives and make informed choices based on their track record and policy positions. This accountability mechanism helps ensure that elected officials work in the best interests of the people.",
            d5 : "Voting provides a platform for citizens to express their support for social causes and advocate for change. By voting for candidates or ballot measures aligned with their values, individuals can contribute to societal progress, such as promoting equality, justice, environmental conservation, or other important issues.",
            photo : "https://artbusinessnews.com/wpdev/wp-content/uploads/2020/10/Shepard-Fairey-@obeygiant-scaled.jpg",
            photo2 : "https://i.pinimg.com/originals/49/b7/ac/49b7ac274209d7dbef6f744a2e39e807.jpg",
            alt : "Box 3 photo" 
        }
    }

  render() 
  {
    return (
      <div>
        
        <div className = 'box'>
            <h2> {this.state.Box1.title}  </h2>
        </div>

        <div className = 'p1'>
            <div className = 'pleft' >
                <p> {this.state.Box1.Description} </p>
            </div>

            <div className = 'pright' >
                <img src = {this.state.Box1.photo} alt = {this.state.Box1.alt} />
            </div>
        </div>


        <div className = 'box'>
            <h2> {this.state.Box2.title}  </h2>
        </div>

        <div className = 'p1'>
            <div className = 'pleft' >
                <p> {this.state.Box2.Description} </p>
                <p> {this.state.Box2.Description2} </p>
                {/* <p> {this.state.Box2.Description3} </p> */}
            </div>

            <div className = 'pright' >
                <img src = {this.state.Box2.photo} alt = {this.state.Box2.alt} />
            </div>
        </div>


        <div className = 'box'>
            <h2> {this.state.Box3.title}  </h2>
        </div>

        <div className = 'p1'>
            <div className = 'pleft' >
                <ol>
                    <li> {this.state.Box3.d1} </li>
                    <li> {this.state.Box3.d2} </li>
                    <li> {this.state.Box3.d3} </li>
                    <li> {this.state.Box3.d4} </li>
                    <li> {this.state.Box3.d5} </li>
                </ol>
            </div>

            <div className = 'pright' >
                <img src = {this.state.Box3.photo} alt = {this.state.Box3.alt}  />
            </div>
        </div>

      </div>
    )
  }
}
