function FormEx() {
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    form.name.value = form.name.value.trim();

    if (form.name.value.length == 0) {
      alert('이름을 입력해주세요.');
      form.name.focus();
      return;
    }

    form.age.value = form.age.value.trim();

    if (form.age.value.length == 0) {
      alert('나이를 입력해주세요.');
      form.age.focus();
      return;
    }

    const name = form.name.value;
    const age = form.age.value;

    alert(`이름 : ${name}, 나이 : ${age}`);

    form.name.value = '';
    form.age.value = '';

    form.name.focus();
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input name="name" type="text" placeholder="이름을 입력해주세요." autoComplete="off"/>
        <br />
        <input name="age" type="number" placeholder="나이을 입력해주세요." defaultValue={20} />
        <br />
        <input type="submit" value="전송" />
      </form>
    </>
  )
}

export default FormEx;