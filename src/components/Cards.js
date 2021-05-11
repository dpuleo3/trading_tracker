import React from 'react'
import '../assets/styles/cards.css'
import { Button } from './Button'



function Cards() {
    return (
        <div className="cards-container">
            <div class="card-group">
                <div class="card">
                    <i class="far fa-compass"></i>
                    <div class="card-body">
                        <h3 class="card-title">INDIVIDUAL</h3>
                        <h6 class="card-text">Start knowing your own trading</h6>
                        <div class="offer-prices">
                            <p class="price"><p class="dollar-sign">$</p>0.00</p>
                        </div>
                        <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--medium'>
                            GET STARTED
                        </Button>
                        <ol class="list-group list-group-flush">
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">1 Portfolio</div>
                                </div>
                                <i class="fas fa-check"></i>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">12 Holdings</div>
                                </div>
                                <i class="fas fa-check"></i>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">Pro Integration</div>
                                </div>
                                <i class="fas fa-check"></i>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">Portfolio Stats</div>
                                </div>
                                <i class="fas fa-check"></i>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">Live Positions</div>
                                </div>
                                <i class="fas fa-check"></i>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">Metrics Reports</div>
                                </div>
                                <i class="fas fa-check"></i>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">Performance Reports</div>
                                </div>
                                <i class="fas fa-check"></i>
                            </li>
                        </ol>
                    </div>
                </div>
                <div class="card">
                    <i class="fas fa-chart-pie"></i>
                    <div class="card-body">
                        <h3 class="card-title">PRO</h3>
                        <h6 class="card-text">Track your historical performance</h6>
                        <div class="offer-prices">
                            <p class="price"><p class="dollar-sign">$</p>8.95</p>
                        </div>
                        <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--medium'>
                            TRY FREE
                        </Button>
                        <ol class="list-group list-group-flush">
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">5 Portfolios</div>
                                </div>
                                <i class="fas fa-check"></i>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">Unlimited Holdings</div>
                                </div>
                                <i class="fas fa-check"></i>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">Ad Free</div>
                                </div>
                                <i class="fas fa-check"></i>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">Pro Integration</div>
                                </div>
                                <i class="fas fa-check"></i>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">Portfolio Stats</div>
                                </div>
                                <i class="fas fa-check"></i>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">Live Positions</div>
                                </div>
                                <i class="fas fa-check"></i>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">Metrics Reports</div>
                                </div>
                                <i class="fas fa-check"></i>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">Performance Reports</div>
                                </div>
                                <i class="fas fa-check"></i>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">Price Alerts</div>
                                </div>
                                <i class="fas fa-check"></i>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">Automatic Dividens</div>
                                </div>
                                <i class="fas fa-check"></i>
                            </li>
                        </ol>
                    </div>
                </div>
                <div class="card">
                    <i class="fas fa-briefcase"></i>
                    <div class="card-body">
                        <h3 class="card-title">COMPANY</h3>
                        <h6 class="card-text">Get the best results</h6>
                        <div class="offer-prices">
                            <p class="price"><p class="dollar-sign">$</p>18.95</p>
                        </div>
                        <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--medium'>
                            TRY FREE
                        </Button>
                        <ol class="list-group list-group-flush">
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">Unlimited Portfolios</div>
                                </div>
                                <i class="fas fa-check"></i>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">Unlimited Holdings</div>
                                </div>
                                <i class="fas fa-check"></i>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">Ad Free</div>
                                </div>
                                <i class="fas fa-check"></i>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">Pro Integration</div>
                                </div>
                                <i class="fas fa-check"></i>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">Portfolio Stats</div>
                                </div>
                                <i class="fas fa-check"></i>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">Live Positions</div>
                                </div>
                                <i class="fas fa-check"></i>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">Metrics Reports</div>
                                </div>
                                <i class="fas fa-check"></i>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">Performance Reports</div>
                                </div>
                                <i class="fas fa-check"></i>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">Price Alerts</div>
                                </div>
                                <i class="fas fa-check"></i>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">Automatic Dividens</div>
                                </div>
                                <i class="fas fa-check"></i>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">Contribution Analysis</div>
                                </div>
                                <i class="fas fa-check"></i>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">Strategy Backtesting</div>
                                </div>
                                <i class="fas fa-check"></i>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">TT Operations Reports</div>
                                </div>
                                <i class="fas fa-check"></i>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards
