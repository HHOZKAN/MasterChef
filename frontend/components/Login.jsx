import React, {useEffect, useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
    return (
        <div>
            <h1>Login</h1>
            <form>
                <label>
                    Email:
                    <input type="text" name="email" />
                </label>
                <label>
                    Password:
                    <input type="text" name="password" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}