<script>
    import Swal from "sweetalert2";
    export let message;

    function showModal(){
        Swal.fire(message);
    }

</script>

<style>
    .bg{
        background-color: aqua;
    }
</style>

<button class="bg" on:click={showModal}>Go</button>