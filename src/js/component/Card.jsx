import React from "react";

function CardPhoto() {
    return (
        <div className="  text-center">
            <div className="row row-cols-1 row-cols-md-4 row-cols-lg-4 g-2 g-lg-4">
                <div className="col">
                    <div className="card">
                        <img src="https://cdn.pixabay.com/photo/2016/09/29/13/08/planet-1702788_1280.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Find Out More!</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="https://cdn.pixabay.com/photo/2018/06/09/17/25/trees-3464777_1280.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Find Out More!</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="https://cdn.pixabay.com/photo/2015/07/27/20/16/book-863418_1280.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Find Out More!</a>
                        </div>
                    </div> </div>
                <div className="col">
                    <div className="card">
                        <img src="https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_1280.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Find Out More!</a>
                        </div>
                    </div> </div>
            </div>
        </div>

    );
};

export default CardPhoto;
