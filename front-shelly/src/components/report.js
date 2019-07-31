import React from 'react';

const Report = ({lat, lng}) => {
    return(
        <div className="text-left border shadow bg-light p-2" dir="rtl" style={{height: '100vh', width: '30%'}}>
            <h4 className="text-info mt-2 text-center">דיווח</h4>
            <p>מיקום:</p>
            {!lng && <p>נא לסמן נקודה על המפה</p>}
            {lat && <p className="my-0">קו רוחב - {lat.toFixed(2)}</p>}
            {lng && <p className="my-0">קו אורך - {lng.toFixed(2)}</p>}
            {lng && <p>הוסף נקודה למועדפים <i className="far fa-star"></i></p>}

            {lng && lat && <form className="mt-3">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">נושא</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="הקלד נושא"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">הקלד דיווח</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlFile1">הוספת קובץ</label>
                    <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
                </div>
                <button className="btn btn-info btn-block mt-5">דווח</button>
            </form>}
        </div>
    );
};

export default Report;