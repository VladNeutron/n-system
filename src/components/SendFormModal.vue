<template>
    <div class="modal fade" id="SendModal" tabindex="-1" role="dialog" aria-labelledby="SendModal" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header header-flex">
                    <slot name="head">Default header</slot>
                    <img src="@/assets/img/closemodal.svg" style="width: 1.25vw; cursor: pointer" alt=""
                        data-bs-dismiss="modal" />
                </div>
                <div class="modal-body modal__padding">
                    <slot name="body">default header</slot>
                </div>
                <div class="modal-footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script></script>
<style>
.header__sec {
    font-weight: 400;
    font-size: 0.833vw;
    color: #a0aec0;
}

.header__main {
    margin: 0;
    font-weight: 700;
    font-size: 1.563vw;
    color: #252f40;
}

.header-flex {
    padding: 1.25vw 2.083vw 0.833vw 2.083vw;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
}
</style>
<style scoped>
.header__sec {
    font-weight: 400;
    font-size: 0.833vw;
    color: #a0aec0;
}

.header__main {
    margin: 0;
    font-weight: 700;
    font-size: 1.563vw;
    color: #252f40;
}

.btn-outline-dark {
    padding: 0.625vw 4.219vw 0.625vw 4.219vw;
}

.bg-gradient-secondary {
    background: linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%);
    border-radius: 8px;
    text-transform: uppercase;
    padding: 0.625vw 4.219vw 0.625vw 4.219vw;
}

.del__btn {
    margin-right: 3.542vw;
}

.modal-footer {
    justify-content: center;
    border-top: 0;
    flex-direction: column;
}

.modal__padding {
    padding-left: 2.083vw;
    padding-right: 2.083vw;
}

.modal__title {
    font-weight: 600;
    font-size: 1.042vw;
    color: #2d3748;
}

.modal-dialog {
    max-width: 48.073vw;
}

label,
.form-label,
.form-control-label {
    font-weight: 600 !important;
    font-size: 14px !important;
    color: #2D3748 !important;
}
</style>
