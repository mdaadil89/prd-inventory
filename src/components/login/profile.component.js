import React from 'react'

class Profile extends  React.Component{

    constructor(props) {
        super(props);
        this.state={
            user:{}
        }
    }
    componentDidMount(){
        const profile = JSON.parse(localStorage.getItem('user'))
        console.log(profile)
        this.setState({user:profile})
    }

    render(){
        const {user} = this.state
        return(
            <div>
                <br/> <br/><br/><br/><br/>

<div className="container bootstrap snippet">
  <div className="panel-body inf-content">
      <div className="row">
          <div className="col-md-4">
              <img alt="" style={{width:"600px"}} title="" className="img-circle img-thumbnail isTooltip" src="https://bootdey.com/img/Content/user-453533-fdadfd.png" data-original-title="Usuario"/> 
              <ul title="Ratings" className="list-inline ratings text-center">
                  <li><a href="#"><span className="glyphicon glyphicon-star"></span></a></li>
                  <li><a href="#"><span className="glyphicon glyphicon-star"></span></a></li>
                  <li><a href="#"><span className="glyphicon glyphicon-star"></span></a></li>
                  <li><a href="#"><span className="glyphicon glyphicon-star"></span></a></li>
                  <li><a href="#"><span className="glyphicon glyphicon-star"></span></a></li>
              </ul>
          </div>
          <div className="col-md-6">
              <strong>Information</strong><br/>
              <div className="table-responsive">
              <table className="table table-condensed table-responsive table-user-information">
                  <tbody>
                      <tr>        
                          <td>
                              <strong>
                                  <span className="glyphicon glyphicon-asterisk text-primary"></span>
                                  Identificacion                                                
                              </strong>
                          </td>
                          <td className="text-primary">
                              {user.id}    
                          </td>
                      </tr>
                      <tr>    
                          <td>
                              <strong>
                                  <span className="glyphicon glyphicon-user  text-primary"></span>    
                                  Name                                                
                              </strong>
                          </td>
                          <td className="text-primary">
                            {user.firstName}
                          </td>
                      </tr>
                      <tr>        
                          <td>
                              <strong>
                                  <span className="glyphicon glyphicon-cloud text-primary"></span>  
                                  Last Name                                                
                              </strong>
                          </td>
                          <td className="text-primary">
                            {user.lastName}
                          </td>
                      </tr>
  
                      <tr>        
                          <td>
                              <strong>
                                  <span className="glyphicon glyphicon-envelope text-primary"></span> 
                                  Username                                                
                              </strong>
                          </td>
                          <td className="text-primary">
                            {user.email}
                          </td>
                      </tr>
                      <tr>        
                          <td>
                              <strong>
                                  <span className="glyphicon glyphicon-eye-open text-primary"></span> 
                                  Location                                                
                              </strong>
                          </td>
                          <td className="text-primary">
                        {user.location}
                          </td>
                      </tr>
                      <tr>        
                          <td>
                              <strong>
                                  <span className="glyphicon glyphicon-phone text-primary"></span> 
                                  Mobile                                                
                              </strong>
                          </td>
                          <td className="text-primary">
                            {user.mobile}
                          </td>
                      </tr>
                                               
                  </tbody>
              </table>
              </div>
          </div>
      </div>
  </div>
  </div>
            </div>
        )
    }
}

export default Profile