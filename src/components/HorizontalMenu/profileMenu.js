import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';



// users
import user from '../../assets/images/users/avatar-4.jpg';

class ProfileMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menu: false,
            username: "Trần Bình Minh"
        };
        this.toggle = this.toggle.bind(this);
    }


    toggle() {
        this.setState(prevState => ({
            menu: !prevState.menu
        }));
    }

    render() {

        return (
            <React.Fragment>
                <Dropdown isOpen={this.state.menu} toggle={this.toggle} className="d-inline-block" >
                    <DropdownToggle className="btn header-item waves-effect" id="page-header-user-dropdown" tag="button">
                        <img className="rounded-circle header-profile-user" src={user} alt="Header Avatar" />
                        <span className="d-none d-xl-inline-block ml-2 mr-1">{this.state.username}</span>
                        <i className="fa fa-chevron-down d-none d-xl-inline-block"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem tag="a" href="#">
                            <i className="fa fa-user-circle-o font-size-15 align-middle mr-1"></i>
                            Thông tin cá nhân
                        </DropdownItem>
                        <DropdownItem tag="a" href="#">
                            <i className="fa fa-cog font-size-15 align-middle mr-1"></i>
                            Thiết lập
                        </DropdownItem>
                        <DropdownItem tag="a" href="#">
                            <i className="fa fa-lock font-size-15 align-middle mr-1"></i>
                            Đổi mật khẩu
                        </DropdownItem>
                        <div className="dropdown-divider"></div>
                        <a to="/logout" className="dropdown-item">
                            <i className="fa fa-sign-out font-size-15 align-middle mr-1 text-danger"></i>
                            <span>Đăng xuất</span>
                        </a>
                    </DropdownMenu>
                </Dropdown>
            </React.Fragment>
        );
    }
}

export default ProfileMenu;
