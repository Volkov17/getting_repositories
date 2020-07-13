import React,{Component} from 'react';


const Modal = ({created_at, stargazers_count,forks_count,languages_url}) => {

    return (
        <>
        <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Information</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <ul>
                            <li>
                                <span>created date :</span>
                                <span> {created_at} </span>
                            </li>
                            <li>
                                <span>count of stars :</span>
                                <span>{stargazers_count}</span>
                            </li>
                            <li>
                                <span>count of fork :</span>
                                <span>{forks_count}</span>
                            </li>
                            <li>
                                <span>all languages :</span>
                                <span>{languages_url}</span>
                            </li>
                        </ul>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Modal