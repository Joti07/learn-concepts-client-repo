import React, { useContext, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { CourseContext } from '../Course/Course';
import { CoursesContext } from '../Courses/Courses';



const CheckOut = () => {
    const { user } = useContext(AuthContext);
    // const { courses } = useContext(CoursesContext);
    // const [cname, csetName] = useState(courses.name);
    const [name, setName] = useState(user.displayName);
    const courses = useLoaderData();
    // console.log(course);

    const handleSubmit = event => {
        event.preventDefault();

    }

    return (
        <div>
            <div className="checkout" >
                <section class="py-5">
                    <div class="container px-4 px-lg-5 my-5">
                        <div class="row">
                            <div class="col-md-4 order-md-2 mb-4">
                                <h4 class="d-flex justify-content-between align-items-center mb-3">
                                    <span class="text-muted">Your cart</span>
                                    <span class="badge badge-secondary badge-pill">3</span>
                                </h4>

                                {

                                    courses.map(course =>
                                        <>
                                            <ul class="list-group mb-3">
                                                <li class="list-group-item d-flex justify-content-between lh-condensed">
                                                    <div>
                                                        <h6 class="my-0">{course.name}</h6>
                                                        <small class="text-muted">{course.level}</small>
                                                    </div>
                                                    <span class="text-muted">{course.Price}BDT</span>
                                                </li>
                                            </ul>

                                        </>

                                    )
                                }


                            </div>
                            <div class="col-md-8 order-md-1">
                                <h4 class="mb-3">Billing address</h4>
                                <form class="needs-validation" novalidate>
                                    <div class="row">
                                        <div class="col-md-6 mb-3">
                                            <label for="Name" class="form-label">Name</label>
                                            <input type="text" class="form-control" id="firstName" placeholder="" value={name} required />
                                            <div class="invalid-feedback">
                                                Valid first name is required.
                                            </div>
                                        </div>

                                    </div>

                                    <div class="mb-3">
                                        <label for="email" class="form-label">Email <span class="text-muted"></span></label>
                                        <input type="email" class="form-control" id="email" value={user?.email} />
                                        <div class="invalid-feedback">
                                            Please enter a valid email address for shipping updates.
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="address" class="form-label">Address</label>
                                        <input type="text" class="form-control" id="address" placeholder="1234 Main St" required />
                                        <div class="invalid-feedback">
                                            Please enter your shipping address.
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="address2" class="form-label">Address 2 <span class="text-muted">(Optional)</span></label>
                                        <input type="text" class="form-control" id="address2" placeholder="Apartment or suite" />
                                    </div>
                                    <div class="row">
                                        <div class="col-md-5 mb-3">
                                            <label for="country" class="form-label">Country</label>
                                            <select class="form-select d-block w-100" id="country" required>
                                                <option value="">Choose...</option>
                                                <option>United States</option>
                                            </select>
                                            <div class="invalid-feedback">
                                                Please select a valid country.
                                            </div>
                                        </div>
                                        <div class="col-md-4 mb-3">
                                            <label for="state" class="form-label">State</label>
                                            <select class="form-select d-block w-100" id="state" required>
                                                <option value="">Choose...</option>
                                                <option>California</option>
                                            </select>
                                            <div class="invalid-feedback">
                                                Please provide a valid state.
                                            </div>
                                        </div>
                                        <div class="col-md-3 mb-3">
                                            <label for="zip" class="form-label">Zip</label>
                                            <input type="text" class="form-control" id="zip" placeholder="" required />
                                            <div class="invalid-feedback">
                                                Zip code required.
                                            </div>
                                        </div>
                                    </div>
                                    <hr class="mb-4" />
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="same-address" />
                                        <label class="form-check-label" for="same-address">Shipping address is the same as my billing address</label>
                                    </div>
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="save-info" />
                                        <label class="form-check-label" for="save-info">Save this information for next time</label>
                                    </div>
                                    <hr class="mb-4" />
                                    <h4 class="mb-3">Payment</h4>
                                    <div class="d-block my-3">
                                        <div class="form-check">
                                            <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked required />
                                            <label class="form-check-label" for="credit">Credit card</label>
                                        </div>
                                        <div class="form-check">
                                            <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required />
                                            <label class="form-check-label" for="debit">Debit card</label>
                                        </div>
                                        <div class="form-check">
                                            <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" required />
                                            <label class="form-check-label" for="paypal">Paypal</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6 mb-3">
                                            <label for="cc-name" class="form-label">Name on card</label>
                                            <input type="text" class="form-control" id="cc-name" placeholder="" required />
                                            <small class="text-muted">Full name as displayed on card</small>
                                            <div class="invalid-feedback">
                                                Name on card is required
                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label for="cc-number" class="form-label">Credit card number</label>
                                            <input type="text" class="form-control" id="cc-number" placeholder="" required />
                                            <div class="invalid-feedback">
                                                Credit card number is required
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-3 mb-3">
                                            <label for="cc-expiration" class="form-label">Expiration</label>
                                            <input type="text" class="form-control" id="cc-expiration" placeholder="" required />
                                            <div class="invalid-feedback">
                                                Expiration date required
                                            </div>
                                        </div>
                                        <div class="col-md-3 mb-3">
                                            <label for="cc-expiration" class="form-label">CVV</label>
                                            <input type="text" class="form-control" id="cc-cvv" placeholder="" required />
                                            <div class="invalid-feedback">
                                                Security code required
                                            </div>
                                        </div>
                                    </div>
                                    <hr class="mb-4" />
                                    <button class="btn btn-dark px-4 rounded-pill" onSubmit={handleSubmit} type="button">Place Order</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

        </div>
    );
};

export default CheckOut;