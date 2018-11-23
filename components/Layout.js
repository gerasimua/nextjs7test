import { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../assets/css/app.css";
​
class Layout extends Component {
    render() {
        return (
            <div className="app">
                <Header />
                <section>{this.props.children}</section>
                <Footer />
            </div>
        );
    }
}
​
export default Layout;