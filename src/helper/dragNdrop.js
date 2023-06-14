var dragSrcEl = undefined;

export function handleDragStart(e) {
    const ele = e.target;
    ele.opacity = "0.4";

    dragSrcEl = ele;
    e.dataTransfer.effectAllowed = "move";
} ;

export function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }

    e.dataTransfer.dropEffect = "move";
    return false;
};

export function handleDragEnter(e) {
    const ele = e.target;
    if (!ele.classList.contains('tile')) return;

    ele.classList.add("over");
}

export function handleDragLeave(e) {
    const ele = e.target;
    if (!ele.classList.contains('tile')) return;

    ele.classList.remove("over");
}

export function handleDragEnd(e) {
    const ele = e.target;
    ele.style.opacity = "1";
    ele.classList.remove("over");
}

export function handleDrop(e) {
    const ele = e.target;

    if (!ele.classList.contains('tile')) return;
    
    if (e.stopPropagation) {
      e.stopPropagation();
    }

    if (dragSrcEl != ele) {
      ele.replaceWith(ele, dragSrcEl);
    }

    ele.classList.remove("over");
    
    dragSrcEl = undefined
    return false;
}