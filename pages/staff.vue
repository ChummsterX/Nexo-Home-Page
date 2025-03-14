<template>
  <Container>
    <h1 class="text-slate-200 text-4xl text-center mb-8">Staff</h1>

    <StaffGroup title="Founder">
      <StaffMember name="ChummsterX" rank="Owner" />
    </StaffGroup>
  </Container>
</template>

<script setup lang="ts">
  useHead({
    title: 'Staff',
  })
</script>
