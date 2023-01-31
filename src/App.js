import React, { useState, useRef, useEffect, useMemo } from "react";
import {
  AppBar,
  Button,
  TextField,
  Toolbar,
  Chip,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemButton,
  Modal,
  Snackbar,
  Alert as MuiAlert,
} from "@mui/material";
import classNames from "classnames";

const Alert = React.forwardRef((props, ref) => {
  return <MuiAlert {...props} ref={ref} variant="filled" />;
});

function useTodosState() {
  const [todos, setTodos] = useState([]);
  const lastTodoIdRef = useRef(0);

  const addTodo = (newContent) => {
    const id = ++lastTodoIdRef.current;

    const newTodo = {
      id,
      content: newContent,
      regDate: dateToStr(new Date()),
    };

    setTodos((todos) => [newTodo, ...todos]);

    return id;
  };

  const modifyTodo = (index, newContent) => {
    const newTodos = todos.map((todo, _index) =>
      _index != index ? todo : { ...todo, content: newContent }
    );
    setTodos(newTodos);
  };

  const modifyTodoById = (id, newContent) => {
    const index = findTodoIndexById(id);

    if (index == -1) {
      return;
    }

    modifyTodo(index, newContent);
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, _index) => _index != index);
    setTodos(newTodos);
  };

  const removeTodoById = (id) => {
    const index = findTodoIndexById(id);

    return removeTodo(index);
  };

  const findTodoIndexById = (id) => {
    return todos.findIndex((todo) => todo.id == id);
  };

  const findtodoById = (id) => {
    const index = findTodoIndexById(id);

    if (index == -1) {
      return null;
    }

    return todos[index];
  };

  return {
    todos,
    addTodo,
    modifyTodo,
    removeTodo,
    removeTodoById,
    findtodoById,
    modifyTodoById,
  };
}

const muiThemePaletteKeys = [
  "background",
  "common",
  "error",
  "grey",
  "info",
  "primary",
  "secondary",
  "success",
  "text",
  "warning",
];

function NewTodoFrom({ todosState, noticeSnackbarState }) {
  const onSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    form.content.value = form.content.value.trim();

    if (form.content.value.length == 0) {
      alert("할일을 입력해주세요.");
      form.content.focus();

      return;
    }

    const newTodoId = todosState.addTodo(form.content.value);
    form.content.value = "";
    form.content.focus();
    noticeSnackbarState.open(`${newTodoId}번 할 일이 추가되었습니다.`);
  };

  return (
    <>
      <form onSubmit={onSubmit} className="flex flex-col mt-4 px-4 gap-2">
        <TextField
          multiline
          minRows={3}
          maxRows={10}
          autoComplete="off"
          name="content"
          type="text"
          label="할일을 입력해주세요."
          variant="outlined"
        />
        <Button type="submit" variant="contained">
          추가
        </Button>
      </form>
    </>
  );
}

function TodoListItem({ todo, index, openDrawer }) {
  return (
    <>
      <li key={todo.id} className="mt-10">
        <div className="flex gap-2">
          <Chip
            label={`번호 : ${todo.id}`}
            variant="outlined"
            className="!pt-1"
          />
          <Chip
            label={todo.regDate}
            variant="outlined"
            color="primary"
            className="!pt-1"
          />
        </div>
        <div className="flex shadow mt-4 rounded-[20px]">
          <Button
            className="w-[130px] flex-shrink-0 !items-start !rounded-[20px_0_0_20px]"
            color="inherit"
          >
            <span
              className={classNames(
                "text-3xl",
                "flex items-center",
                "h-[50px]",
                {
                  "text-[color:var(--mui-color-primary-main)]": index % 2 == 0,
                },
                {
                  "text-[#858585]": index % 2 != 0,
                }
              )}
            >
              <i className="fa-solid fa-check"></i>
            </span>
          </Button>
          <div className="flex-shrink-0 w-[2px] bg-[#b0b0b0] my-5 mr-5"></div>
          <div className="whitespace-pre-wrap leading-relaxed hover:text-[color:var(--mui-color-primary-main)] flex-grow my-5 flex items-center">
            {todo.content}
          </div>
          <Button
            onClick={() => openDrawer(todo.id)}
            className="w-[130px] flex-shrink-0 !items-start !rounded-[0_20px_20px_0]"
            color="inherit"
          >
            <span className="text-xl text-[#b0b0b0] flex items-center h-[50px]">
              <i className="fa-solid fa-ellipsis"></i>
            </span>
          </Button>
        </div>
      </li>
    </>
  );
}

function useTodoOptionDrawerState() {
  const [todoId, setTodoId] = useState(null);
  const opend = useMemo(() => todoId !== null, [todoId]);
  const close = () => setTodoId(null);
  const open = (id) => setTodoId(id);

  return {
    todoId,
    opend,
    close,
    open,
  };
}

function EditTodoModal({
  state,
  todo,
  todosState,
  closeDrawer,
  noticeSnackbarState,
}) {
  const close = () => {
    state.close();
    closeDrawer();
  };
  const onSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    form.content.value = form.content.value.trim();

    if (form.content.value.length == 0) {
      alert("할 일을 입력해주세요.");
      form.content.focus();

      return;
    }

    todosState.modifyTodoById(todo.id, form.content.value);
    close();
    noticeSnackbarState.open(`${todo.id}번 할 일이 수정되었습니다.`, "info");
  };

  return (
    <>
      <Modal
        open={state.opend}
        onClose={close}
        className="flex justify-center items-center"
      >
        <div className="bg-white p-10 rounded-[20px]">
          <form onSubmit={onSubmit} className="flex flex-col mt-4 px-4 gap-2">
            <TextField
              multiline
              minRows={3}
              maxRows={10}
              autoComplete="off"
              name="content"
              type="text"
              label="할일을 입력해주세요."
              variant="outlined"
              defaultValue={todo?.content}
            />
            <Button type="submit" variant="contained">
              수정
            </Button>
          </form>
        </div>
      </Modal>
    </>
  );
}

function useEditTodoModalState() {
  const [opend, setOpend] = useState(false);

  const open = () => {
    setOpend(true);
  };

  const close = () => {
    setOpend(false);
  };

  return {
    opend,
    open,
    close,
  };
}

function TodoOptionDrawer({ state, todosState, noticeSnackbarState }) {
  const editTodoModalState = useEditTodoModalState();
  const removeTodo = () => {
    if (window.confirm(`${state.todoId}번 할 일을 삭제하겠습니까?`) == false) {
      state.close();
      return;
    }

    todosState.removeTodoById(state.todoId);
    state.close();
    noticeSnackbarState.open(`${todo.id}번 할 일이 삭제되었습니다.`, "info");
  };
  const todo = todosState.findtodoById(state.todoId);

  return (
    <>
      <EditTodoModal
        noticeSnackbarState={noticeSnackbarState}
        state={editTodoModalState}
        todo={todo}
        todosState={todosState}
        closeDrawer={state.close}
      />
      <SwipeableDrawer
        anchor={"bottom"}
        onOpen={() => {}}
        open={state.opend}
        onClose={state.close}
      >
        <List className="!py-0">
          <ListItem className="!pt-5 !p-5">
            <span className="text-red-500 !pr-2">{state.todoId}번</span>
            옵션 드로어
          </ListItem>
          <ListItemButton
            className="!pt-5 !p-5 !item-baseline"
            onClick={editTodoModalState.open}
          >
            <i className="fa-solid fa-pen-to-square"></i>
            &nbsp;
            <span>수정</span>
          </ListItemButton>
          <ListItemButton
            className="!pt-5 !p-5 !item-baseline"
            onClick={removeTodo}
          >
            <i className="fa-solid fa-trash"></i>
            &nbsp;
            <span>삭제</span>
          </ListItemButton>
        </List>
      </SwipeableDrawer>
    </>
  );
}

function TodoList({ todosState, noticeSnackbarState }) {
  const todoOptionDrawerState = useTodoOptionDrawerState();

  return (
    <>
      <TodoOptionDrawer
        state={todoOptionDrawerState}
        todosState={todosState}
        noticeSnackbarState={noticeSnackbarState}
      />
      <div className="mt-4 px-4">
        <ul>
          {todosState.todos.map((todo, index) => (
            <TodoListItem
              noticeSnackbarState={noticeSnackbarState}
              key={todo.id}
              todo={todo}
              index={index}
              todosState={todosState}
              openDrawer={todoOptionDrawerState.open}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

function useNoticeSnackbarState() {
  const [opened, setOpened] = useState(null);
  const [autoHideDuration, setAutoHideDuration] = useState(null);
  const [severity, setSeverity] = useState(null);
  const [msg, setMsg] = useState(null);

  const open = (msg, severity = "success", autoHideDuration = 6000) => {
    setOpened(true);
    setAutoHideDuration(autoHideDuration);
    setSeverity(severity);
    setMsg(msg);
  };

  const close = () => {
    setOpened(false);
  };

  return {
    opened,
    autoHideDuration,
    severity,
    msg,
    open,
    close,
  };
}

function NoticeSnackbar({ state }) {
  return (
    <>
      <Snackbar
        open={state.opened}
        autoHideDuration={state.autoHideDuration}
        onClose={state.close}
      >
        <Alert severity={state.severity}>{state.msg}</Alert>
      </Snackbar>
    </>
  );
}

function App({ theme }) {
  const todosState = useTodosState();
  const noticeSnackbarState = useNoticeSnackbarState();

  useEffect(
    () => (
      todosState.addTodo("운동 \n스트레칭 \n유산소 \n런지 \n스쿼트"),
      todosState.addTodo("요리"),
      todosState.addTodo("공부")
    ),
    []
  );

  useEffect(() => {
    const r = document.querySelector(":root");

    muiThemePaletteKeys.forEach((paletteKey) => {
      const themeColorObj = theme.palette[paletteKey];

      for (const key in themeColorObj) {
        if (Object.hasOwnProperty.call(themeColorObj, key)) {
          const colorVal = themeColorObj[key];
          r.style.setProperty(`--mui-color-${paletteKey}-${key}`, colorVal);
        }
      }
    });
  }, []);

  return (
    <>
      <AppBar position="static">
        <Toolbar className="justify-center">
          <div className="flex-1"></div>
          <div className="flex-bold">HAPPY NOTE</div>
          <div className="flex-1"></div>
        </Toolbar>
      </AppBar>
      <NoticeSnackbar state={noticeSnackbarState} />
      <NewTodoFrom
        todosState={todosState}
        noticeSnackbarState={noticeSnackbarState}
      />
      <TodoList
        todosState={todosState}
        noticeSnackbarState={noticeSnackbarState}
      />
    </>
  );
}

export default App;

// 유틸리티

// 날짜 객체 입력받아서 문장(yyyy-mm-dd hh:mm:ss)으로 반환한다.
function dateToStr(d) {
  const pad = (n) => {
    return n < 10 ? "0" + n : n;
  };

  return (
    d.getFullYear() +
    "-" +
    pad(d.getMonth() + 1) +
    "-" +
    pad(d.getDate()) +
    " " +
    pad(d.getHours()) +
    ":" +
    pad(d.getMinutes()) +
    ":" +
    pad(d.getSeconds())
  );
}
