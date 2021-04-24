import {useState} from "react";
import api from '../api/api';

const CommentForm = ({id}) => {

    const [login, setLogin] = useState('');
    const [loginError, setLoginError] = useState(false);


    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);

    const [comment, setComment] = useState('');
    const [commentError, setCommentError] = useState(false);

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const clearField = (fn, time = 5) => {
        setTimeout(() => {
            eval(`${fn}('')`);
        }, time * 1000)
    }

    const validateForm = () => {
        let validFlg = true;
        if(!login.length){
            setLoginError(true);
            validFlg = false;
        }
        else{
            setLoginError(false);
        }

        if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            setEmailError(true);
            validFlg = false;
        }
        else{
            setEmailError(false);
        }

        if(!comment.length){
            setCommentError(true);
            validFlg = false;
        }
        else{
            setCommentError(false);
        }

        return validFlg;
    }

    const handleSubmit = e => {
        e.preventDefault();

        if(validateForm()){
            setError('');
            const form = new FormData();
            form.append('author_name', login);
            form.append('author_email', email);
            form.append('content', comment);
            form.append('author_name', login);
            form.append('post', id);

            api.post('/comments', form, {headers: { "Content-Type": "multipart/form-data" }})
                .then(response => {
                    setSuccess('Twój komentarz został zapisany i oczekuje na zatwierdzenie przez Grubego Administratora!');
                    clearField('setSuccess', 10);

                    setLogin('');
                    setEmail('');
                    setComment('');

                })
                .catch(error => {
                    setSuccess('');
                    if(error.response.status === 409){
                        setError('Istnieje już komentarz o identycznej treści!');
                    }
                    else{
                        setError('Wystąpił nieoczekiwany bład, spróbuj ponownie!');
                    }
                    clearField('setError', 10);
                })
        }
        else{
            setError('Popraw pola zaznaczone na czerwono!');
        }
    }

    return (
        <form className="comment-form" noValidate onSubmit={handleSubmit}>
            <h2 className="leave-comment">Zostaw komentarz</h2>
            <h4 className="email-info">Twój adres email nie zostanie opublikowany.</h4>
            {error && <div className="info error">{error}</div> }
            {success && <div className="info success">{success}</div> }
            <textarea className={`input ${commentError ? 'error' : ''}`} rows="10" value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Komentarz"></textarea>
            <div className="input-wrapper">
                <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} className={`input ${loginError ? 'error' : ''}`} placeholder="Podpis" />
                <input type="email" className={`input ${emailError ? 'error' : ''}`} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            </div>
            <button type="submit" className="submit">Dodaj komentarz</button>
        </form>
    )
}

export default CommentForm;