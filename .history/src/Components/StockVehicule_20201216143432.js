import React from 'react'

export default function StockVehicule() {
    return (
        <div>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {/* CARD 1 */}
                <div class="col">
                    <div class="card h-100">
                        <img src="..." class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
                
                {/* CARD 2 */}
                <div class="col">
                    <div class="card h-100">
                        <img src="..." class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
                {/* CARD 3 */}
                <div class="col">
                    <div class="card h-100">
                        <img src="..." class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
